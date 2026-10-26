export const site = {
  name: "Summit Roofing Co.",
  shortName: "Summit",
  description:
    "Residential and commercial roofing for Dallas, Plano, Irving, and Frisco.",
  phone: "(214) 555-0186",
  phoneHref: "tel:+12145550186",
  location: "Dallas, Texas",
  serviceAreas: ["Dallas", "Plano", "Irving", "Frisco"],
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
] as const;

export const services = [
  {
    title: "Roof Replacement",
    description:
      "Replacement options with clear material guidance for your property, roof type, and budget.",
    image: "/images/project-residential.jpg",
    imageAlt: "Modern home with a dark roof and warm wood exterior",
    icon: "replacement",
  },
  {
    title: "Roof Repair",
    description:
      "Repairs for leaks, damaged shingles, flashing issues, and other roof problems.",
    image: "/images/project-repair.jpg",
    imageAlt: "Roofing professional removing damaged shingles from a residential roof",
    icon: "repair",
  },
  {
    title: "Storm Damage Repair",
    description:
      "Assessment and repair planning after hail, wind, or other storm-related roof damage.",
    image: "/images/project-storm.jpg",
    imageAlt: "Roofing professional standing on a roof with damaged shingles",
    icon: "storm",
  },
  {
    title: "Roof Inspections",
    description:
      "A closer look at roof condition to help you plan maintenance, repairs, or replacement.",
    image: "/images/project-inspection.jpg",
    imageAlt: "Warmly lit home with a steep, shingled roof at dusk",
    icon: "inspection",
  },
] as const;

export const projects = [
  {
    title: "Residential Roof Replacement",
    category: "Residential",
    location: "Dallas",
    image: "/images/project-residential.jpg",
    imageAlt: "Modern home with a dark roof and warm wood exterior",
    sizes: "(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw",
  },
  {
    title: "Roof Repair",
    category: "Residential",
    location: "Plano",
    image: "/images/project-repair.jpg",
    imageAlt: "Roofing professional removing damaged shingles from a residential roof",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Commercial Roofing",
    category: "Commercial",
    location: "Irving",
    image: "/images/project-commercial.jpg",
    imageAlt: "Curved modern commercial building facade against a blue sky",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Storm Damage Repair",
    category: "Residential",
    location: "Frisco",
    image: "/images/project-storm.jpg",
    imageAlt: "Roofing professional standing on a storm-damaged shingle roof",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Roof Deck Construction",
    category: "Commercial",
    location: "Dallas",
    image: "/images/project-roof-deck.jpg",
    imageAlt: "Crew reviewing a large commercial roof deck under construction",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Roof Inspection",
    category: "Residential",
    location: "Plano",
    image: "/images/project-inspection.jpg",
    imageAlt: "Warmly lit home with a steep, shingled roof at dusk",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
] as const;

export const features = [
  {
    title: "Material options",
    description:
      "Compare replacement materials and roof-system options that fit the property.",
    icon: "layers",
  },
  {
    title: "Clear estimates",
    description:
      "Review the proposed scope and pricing before any work begins.",
    icon: "pricing",
  },
  {
    title: "Considered scheduling",
    description:
      "Planning that accounts for access, occupants, and the property's daily use.",
    icon: "calendar",
  },
  {
    title: "Detailed inspections",
    description:
      "A straightforward look at roof condition and the next-step options available.",
    icon: "inspection",
  },
] as const;

export const sampleReviews = [
  {
    quote:
      "Add a verified homeowner review here. Describe the roof issue, the work completed, and the result the homeowner experienced.",
    source: "Homeowner",
    location: "Dallas, TX",
  },
  {
    quote:
      "Add a verified property-manager review here. Focus on communication, scheduling, and how the roofing work affected the property.",
    source: "Property Manager",
    location: "Irving, TX",
  },
  {
    quote:
      "Add a verified commercial client review here. Include the property type, the roofing scope, and the outcome after completion.",
    source: "Commercial Client",
    location: "Plano, TX",
  },
] as const;

export const estimateServiceOptions: readonly string[] = [
  "Not sure yet",
  ...services.map((service) => service.title),
  "Commercial Roofing",
];
