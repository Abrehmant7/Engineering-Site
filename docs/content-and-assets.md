# Website content and assets

## Company source material

The supplied `engineering.jpeg`, `engineering2.jpeg`, `eng 2.jpeg` and `eng logo.pdf` are preserved in the project root. Company branding, the mechanical/electrical/programming service categories, phone numbers, Prince Engineering Works collaboration and client names come from these materials.

The website presents selected hardware categories visible in the supplied product imagery. It does not claim specific available models, distributor status, certifications, quantified performance results or customer testimonials. The dedicated About, Services, Products and Clients pages expand on the same company material. The Contact page prepares a visitor-controlled WhatsApp enquiry using the brochure's main phone number.

## Similar websites researched

Reviewed on 4 November 2026 for service terminology and information hierarchy. Homepage wording is original, and competitor-specific capabilities, guarantees and credentials have not been transferred to Linear Automation.

- [Actemium Avanceon: Industrial Controls & Automation](https://www.avanceon.com/industrial-control/) — separation of electrical design, control systems and manufacturing automation.
- [DCPS PAK: Industrial Automation](https://dcpspak.com/services/industrial-automation/) — concise service explanations and direct project enquiries.
- [A.S. Automation](https://www.asautomation.pk/) — overview of automation services and control hardware categories; reviewed through indexed search content.

## Brand and client assets

- `public/images/linear-automation.png`: original company logo, rendered directly from the supplied PDF with Poppler. No regenerated logo or replacement wordmark is used.
- `public/images/client-brochure.jpeg`: unchanged copy of the supplied `engineering2.jpeg`. Each client mark is displayed through a clipped SVG window, preserving the original artwork. Hovering restores its colour.
- `public/favicon.svg`: a simple site monogram, separate from the original company logo.
- Font: locally hosted Manrope Variable from `@fontsource-variable/manrope`.

The source brochure is low resolution, so the client marks retain that source-quality limit. Separate original logo files can replace the brochure windows later.

## Generated industrial imagery

Created with the built-in image-generation tool. These are illustrative images of industrial equipment, not photographs of Linear Automation premises, completed client work, or guaranteed stock. Original generated PNGs are retained in `src/assets/images/`; Astro creates responsive WebP variants at build time.

### `src/assets/images/industrial-robotics.png`

Final prompt:

> Use case: photorealistic-natural. Asset type: wide cinematic homepage hero photograph for an industrial automation and mechanical engineering company, landscape 16:9. Photograph a single substantial yellow six-axis industrial robotic arm in a real modern factory, mounted on a workbench on the right half, gripping a small metal component. Accurate mechanical joints, cabling, brushed steel machine fixtures, high factory windows and softly blurred manufacturing equipment in the background. Camera at workbench height, editorial industrial photography with restrained warm yellow and cool charcoal tones, strong but natural side light, realistic lightly used surfaces. Place the main robot and its readable silhouette on the right 55 percent; leave the left 45 percent as darker softly blurred factory negative space for webpage headline overlay. Premium understated engineering aesthetic, crisp industrial details, no people, no welding sparks, no text, no graphic overlays, no logos, no watermarks. This is an illustrative industrial image, not a specific company facility. Landscape wide composition.

### `src/assets/images/control-panel.png`

Final prompt:

> Use case: photorealistic-natural. Asset type: editorial industrial photograph for the about section of an industrial automation website. Landscape 4:3 image of a precisely wired open industrial electrical control cabinet in a clean practical workshop. A neat row of realistic PLC controller modules and servo drives on DIN rails, carefully routed blue and black cables, cable ducts and terminal blocks. Three-quarter close-up with the cabinet open, natural soft workshop light, refined muted charcoal, silver and white palette with small yellow electrical details. Focus on believable electrical engineering craftsmanship, realistic textures, shallow depth of field. No people, no text overlay, no branding, no watermarks, no readable product claims. This is an illustrative industrial image, not a specific customer project.

### `src/assets/images/automation-hardware.png`

Final prompt:

> Use case: product-mockup. Asset type: industrial automation hardware category image for a simple modern engineering company website, landscape 4:3. Premium technically believable studio photograph of an unbranded compact silver industrial servo motor with a black square front flange and steel output shaft in the right foreground, beside a slim vertical gray servo drive and a small row of gray PLC controller modules on the left. Equipment sits directly on a warm pale gray studio floor against a warm pale gray seamless background, soft natural shadows. Three-quarter view from slightly above, uncluttered balanced product arrangement, wide spacing, accurate realistic mechanical detail, understated commercial equipment photography. Neutral silver and graphite, a few tiny green connection terminals. No people, no readable text, no brand logos, no graphic overlays, no watermark. Representative product categories only, not a claimed exact brand model.
