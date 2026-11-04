import fs from 'node:fs';
import path from 'node:path';

// Audit the generated site, so cross-page fragments and built asset paths are
// checked against the files that will actually be deployed.
const root = path.resolve('dist');
if (!fs.existsSync(root)) throw new Error('Build the site with npm run build before checking links.');
const origin = 'https://site.invalid';
const htmlFiles = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html'));
const errors = [];
const documents = new Map();
let checked = 0;

const decode = value => value
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));

function documentAt(file) {
  if (!documents.has(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const ids = [...html.matchAll(/\bid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(match => decode(match[1] ?? match[2] ?? match[3]));
    if (new Set(ids).size !== ids.length) errors.push(`${path.relative(root, file)}: duplicate element IDs`);
    if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) errors.push(`${path.relative(root, file)}: expected exactly one h1`);
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${path.relative(root, file)}: missing page title`);
    documents.set(file, { html, ids: new Set(ids) });
  }
  return documents.get(file);
}

function checkReference(raw, source) {
  const reference = decode(raw.trim());
  checked++;
  if (!reference) { errors.push(`${source}: empty link or asset reference`); return; }
  if (/^(?:data:|blob:)/i.test(reference)) return;
  if (/^tel:/i.test(reference)) {
    if (!/^tel:\+\d{8,15}$/.test(reference)) errors.push(`${source}: invalid telephone link ${reference}`);
    return;
  }
  if (/^mailto:/i.test(reference)) return;
  let url;
  try { url = new URL(reference, new URL(source.replaceAll(path.sep, '/'), `${origin}/`)); }
  catch { errors.push(`${source}: invalid URL ${reference}`); return; }
  if (!['https:', 'http:'].includes(url.protocol)) { errors.push(`${source}: unsupported URL protocol ${reference}`); return; }
  if (url.origin !== origin) {
    if (url.hostname === 'wa.me' && (!/^\/\d{8,15}$/.test(url.pathname) || !url.searchParams.get('text'))) errors.push(`${source}: invalid WhatsApp enquiry URL`);
    return;
  }

  let target = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
  if (!target.startsWith(`${root}${path.sep}`) && target !== root) { errors.push(`${source}: target escapes the build directory`); return; }
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!fs.existsSync(target)) { errors.push(`${source}: missing target ${reference}`); return; }
  if (url.hash && target.endsWith('.html') && !documentAt(target).ids.has(decodeURIComponent(url.hash.slice(1)))) errors.push(`${source}: missing fragment ${reference}`);
}

for (const relative of htmlFiles) {
  const { html } = documentAt(path.join(root, relative));
  const markup = html.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>');
  for (const match of markup.matchAll(/\s(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) checkReference(match[1] ?? match[2] ?? match[3], relative);
  for (const match of markup.matchAll(/\bsrcset\s*=\s*"([^"]*)"/g)) {
    for (const candidate of match[1].split(',')) checkReference(candidate.trim().split(/\s+/)[0], relative);
  }
}
for (const relative of fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.css'))) {
  const css = fs.readFileSync(path.join(root, relative), 'utf8');
  for (const match of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) checkReference(match[1], relative);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Passed: ${htmlFiles.length} HTML pages and ${checked} links/asset references. Internal routes, fragments, page headings, telephone and WhatsApp URL formats are valid.`);
  console.log('External services and phone availability are not contacted by this check.');
}
