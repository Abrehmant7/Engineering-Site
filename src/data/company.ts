export const company = {
  name: 'Linear Automation',
  partner: 'Prince Engineering Works',
  phone: '+92 321 1234446',
  phoneHref: 'tel:+923211234446',
  secondaryPhone: '+92 333 8164060',
  secondaryPhoneHref: 'tel:+923338164060',
  whatsapp: 'https://wa.me/923211234446',
};

export function enquiryLink(subject = 'an automation project') {
  return `${company.whatsapp}?text=${encodeURIComponent(`Hello Linear Automation, I would like to discuss ${subject}.`)}`;
}

// These windows display the original client marks from the supplied brochure.
// Coordinates refer to public/images/client-brochure.jpeg (564 x 1024).
export const clients = [
  { name: 'Master Sanitary Ware', viewBox: '168 380 109 80' },
  { name: 'Askari Cement', viewBox: '288 380 109 80' },
  { name: 'Maple Leaf Cement', viewBox: '408 380 109 80' },
  { name: 'Lucky Cement', viewBox: '49 668 109 80' },
  { name: 'Fauji Cement', viewBox: '408 572 109 80' },
  { name: 'Rafhan Maize', viewBox: '408 668 109 80' },
  { name: 'Lucky Core Industries', viewBox: '168 764 109 80' },
  { name: 'Crown Foam', viewBox: '168 668 109 80' },
];

export const services = [
  {
    id: 'mechanical-engineering',
    href: '/services/#mechanical-engineering',
    number: '01',
    icon: 'mechanical',
    title: 'Mechanical engineering',
    description: 'Custom machines and structures designed around your production process, with speed, accuracy and safety in mind.',
    detail: 'Custom machinery / Production automation',
  },
  {
    id: 'electrical-control-panels',
    href: '/services/#electrical-control-panels',
    number: '02',
    icon: 'panel',
    title: 'Electrical control panels',
    description: 'Thoughtfully designed and built control panels that bring your electrical components together in one practical system.',
    detail: 'Panel design / Control system integration',
  },
  {
    id: 'plc-programming',
    href: '/services/#plc-programming',
    number: '03',
    icon: 'code',
    title: 'PLC & machine programming',
    description: 'Purposeful programming that turns complex machine operations into coordinated, efficient and repeatable processes.',
    detail: 'PLC programming / Machine control',
  },
  {
    id: 'robotics',
    href: '/robotics/',
    number: '04',
    icon: 'robot',
    title: 'Robotics',
    description: 'Give an existing robot new life through component replacement, or manufacture a new robot from the ground up around your production task.',
    detail: 'Retrofitting / Robot manufacturing',
  },
] as const;

export const roboticsServices = [
  {
    id: 'retrofitting',
    interest: 'robot-retrofitting',
    title: 'Robot retrofitting',
    eyebrow: 'A new life for existing equipment',
    description: 'Replace old, worn or obsolete robot parts with new, compatible components. Bring the mechanics, controls and programming back into a coordinated system.',
    linkLabel: 'Explore retrofitting',
  },
  {
    id: 'manufacturing',
    interest: 'robot-manufacturing',
    title: 'Robot manufacturing',
    eyebrow: 'A new robot, from the ground up',
    description: 'Design and manufacture a new robot from scratch: its structure, movement, tooling, electrical controls and programming, shaped around the job it needs to do.',
    linkLabel: 'Explore robot manufacturing',
  },
] as const;

export const products = [
  {
    id: 'plc-controllers',
    name: 'PLC controllers',
    detail: 'The intelligence behind your machines',
    subject: 'PLC controllers',
    description: 'Programmable controllers bring machine inputs, operating sequences and outputs together. The right selection starts with understanding what your machine needs to do.',
    checklist: ['Your existing controller or machine details', 'The signals and equipment to be connected', 'The operating sequence you want to achieve'],
  },
  {
    id: 'servo-motors-and-drives',
    name: 'Servo motors & drives',
    detail: 'Precision where movement matters',
    subject: 'servo motors and drives',
    description: 'A motor and drive need to work with the mechanics and controls around them. Discuss coordinated motion hardware for the positioning and movement your process requires.',
    checklist: ['Motor and drive nameplate photographs', 'Your movement, speed and positioning needs', 'The mechanical load and existing control system'],
  },
  {
    id: 'automation-hardware',
    name: 'Automation hardware',
    detail: 'Components that bring it all together',
    subject: 'automation hardware',
    description: 'Control and drive components form part of a wider machine system. Share your current setup so we can discuss hardware around your application rather than an isolated part number.',
    checklist: ['The component type or part number, if known', 'Photographs of the current panel or equipment', 'Whether this is a replacement, upgrade or new build'],
  },
] as const;

export const allClients = [
  ...clients,
  { name: 'Vogue Sanitary Ware', viewBox: '49 380 109 80' },
  { name: 'Minhas Pipes & Fittings', viewBox: '49 476 109 80' },
  { name: 'BOSS', viewBox: '168 476 109 80' },
  { name: 'Pool Sanitary Ware', viewBox: '408 476 109 80' },
  { name: 'Supreme Asia Ceramics', viewBox: '49 572 109 80' },
  { name: 'Gharibwal Cement', viewBox: '288 572 109 80' },
  { name: 'Chattan Pipes & Fittings', viewBox: '288 668 109 80' },
  { name: 'Qadri Group', viewBox: '49 860 109 80' },
];

export const navigation = [
  { href: '/about/', label: 'About us' },
  { href: '/services/', label: 'Our expertise' },
  { href: '/robotics/', label: 'Robotics' },
  { href: '/products/', label: 'Products' },
  { href: '/clients/', label: 'Our clients' },
];
