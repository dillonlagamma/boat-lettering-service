export const site = {
  name: "Boat Lettering Service",
  tagline: "Lettering that belongs on the water",
  serving: "Serving South Florida's boat owners since 1987",
  heritage: "A boater for boat owners",
  artwork:
    "Whether you have your own artwork or have a design, we can turn that into boat lettering.",
  rank: "We are the #1 boat lettering service in South Florida.",
  established: 1987,
  years: 39,
  phone: "954-270-0103",
  phoneHref: "tel:9542700103",
  email: "boatlettering1@yahoo.com",
  emailHref: "mailto:boatlettering1@yahoo.com",
  url: "https://www.boatletteringservice.com",
  description:
    "Serving South Florida's boat owners since 1987. Full-service shop for boat names, graphics, decals, signs, vinyl wraps, and striping. A boater for boat owners — we install locally or ship nationwide, including Long Island.",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/striping", label: "Boat Striping" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/design", label: "Design" },
] as const;

export const services = [
  {
    slug: "names",
    title: "Boat Names",
    blurb: "Custom typography for the transom or hull — scripts, gold leaf looks, and high-end layouts that feel like they belong on your boat.",
    image: "/portfolio/job-2.jpg",
    alt: "Gold CONSTANCE lettering and Key Largo port on a dark yacht transom",
    imagePosition: "center 55%",
  },
  {
    slug: "graphics",
    title: "Graphics & Decals",
    blurb: "Logos, fish, flags, and full-color printed graphics in marine-grade vinyl that holds up to Florida sun and salt.",
    image: "/portfolio/job-16.jpg",
    alt: "WADDLE WE DO lettering with yellow duck graphics on a white transom",
    imagePosition: "center 40%",
  },
  {
    slug: "registration",
    title: "Registration & Ports",
    blurb: "Documented numbers, state registration, and hailing ports sized to the rules — 3\" numbers, 2.5\" or 4\" ports.",
    image: "/portfolio/job-23.jpg",
    alt: "N264WB registration lettering on a white aircraft fuselage",
    imagePosition: "center 40%",
  },
  {
    slug: "wraps",
    title: "Vinyl Wraps",
    blurb: "Partial or full hull wraps, transom wraps, and accent panels. A new look without a full paint job.",
    image: "/images/service-wrap.jpg",
    alt: "Full-color vinyl wrap on a pink racing hull with custom name and graphics",
    imagePosition: "center",
  },
  {
    slug: "signs",
    title: "Boat Signs",
    blurb: "LED, carved, metal, and plastic signs for yachts and fleets — plus hand lettering and gold or silver leaf.",
    image: "/images/service-sign.jpg",
    alt: "Gold STAR FLYER lettering on a carved wooden nameplate mounted to a white hull",
    imagePosition: "center",
  },
  {
    slug: "striping",
    title: "Hull Striping",
    blurb: "Boot stripes and accent pinstripes in 2 mil high-performance vinyl. We install, or we ship 150 ft rolls for DIY.",
    image: "/portfolio/job-15.jpg",
    alt: "Mission Xpress lettering set in a dark hull stripe on a white powerboat",
    imagePosition: "center 45%",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Design",
    body: "Whether you have your own artwork or have a design, we can turn that into boat lettering. We work the layout with you — name, port, graphics, and placement — until it looks right on the boat.",
  },
  {
    n: "02",
    title: "Produce",
    body: "Cut and printed on 3M, Avery, and Oracal marine vinyl. Built to resist fading, cracking, and peeling in South Florida weather.",
  },
  {
    n: "03",
    title: "Install or ship",
    body: "We letter transoms in the shop or at the dock across Martin, Palm Beach, Broward, and Dade County. Or we ship pre-spaced lettering to Long Island and anywhere in the U.S.",
  },
] as const;

export const materials = [
  {
    name: "3M",
    detail: "Marine-grade cast vinyl and overlaminates used by OEMs. Built for salt, UV, and compound curves.",
  },
  {
    name: "Avery",
    detail: "High-performance films with clean weeding and lasting color for names, numbers, and graphics.",
  },
  {
    name: "Oracal",
    detail: "Outdoor-rated films trusted for striping and lettering that stay sharp through Florida seasons.",
  },
] as const;

export const counties = [
  "Martin County",
  "Palm Beach County",
  "Broward County",
  "Miami-Dade County",
] as const;

export const cities = [
  "Lighthouse Point",
  "Deerfield Beach",
  "Pompano Beach",
  "Fort Lauderdale",
  "Hollywood",
  "Hallandale Beach",
  "Miami",
  "Miami Beach",
  "Boca Raton",
  "Parkland",
  "Coral Springs",
  "Margate",
  "Key Largo",
] as const;

export const brands = [
  "Regal",
  "Mako",
  "Hatteras",
  "Bertram",
  "Wellcraft",
  "Contender",
  "Ocean",
  "Intrepid",
  "Midnight Express",
  "Egret",
] as const;

export const brandLogos = [
  { name: "Regal", src: "/brands/regal.svg" },
  { name: "Mako", src: "/brands/mako.png" },
  { name: "Hatteras", src: "/brands/hatteras.png" },
  { name: "Bertram", src: "/brands/bertram.svg" },
  { name: "Wellcraft", src: "/brands/wellcraft-logo.svg" },
  { name: "Contender", src: "/brands/contender.png" },
  { name: "Ocean", src: "/brands/ocean.png" },
  { name: "Intrepid", src: "/brands/intrepid.png" },
  { name: "Midnight Express", src: "/brands/midnight-express-logo.svg" },
  { name: "Egret", src: "/brands/egret.png" },
] as const;

export const aboutBlurb =
  "We take exceptional pride in our sign and lettering designs and graphics. We have over 39 years of experience in the boat lettering business here in South Florida, from Martin, Palm Beach, Broward, and Dade County, with satisfied boat owners. We are your number one source for boat names, boat graphics, boat decals, boat signs, and vinyl wraps. We are the #1 boat lettering service in South Florida.";

export const portfolioItems = [
  {
    id: "escape",
    title: "Escape",
    category: "names" as const,
    location: "Palm Beach, FL",
    image: "/portfolio/job-6.jpg",
  },
  {
    id: "salty-dog",
    title: "Salty Dog",
    category: "names" as const,
    location: "Ft. Lauderdale, FL",
    image: "/portfolio/job-8.jpg",
  },
  {
    id: "slo-flight",
    title: "Slo Flight",
    category: "graphics" as const,
    location: "Lighthouse Point, FL",
    image: "/portfolio/job-12.jpg",
  },
  {
    id: "shes-my-lady-ii",
    title: "She's My Lady II",
    category: "names" as const,
    location: "Palm Beach, FL",
    image: "/portfolio/job-19.jpg",
  },
  {
    id: "constance",
    title: "Constance",
    category: "names" as const,
    location: "Key Largo, FL",
    image: "/portfolio/job-2.jpg",
  },
  {
    id: "heart-attack",
    title: "Heart Attack",
    category: "names" as const,
    location: "Miami Beach, FL",
    image: "/portfolio/job-13.jpg",
  },
  {
    id: "cristina",
    title: "Cristina",
    category: "names" as const,
    location: "Delray Beach, FL",
    image: "/portfolio/job-26.jpg",
  },
  {
    id: "life-is-good",
    title: "Life is good.",
    category: "names" as const,
    location: "Road Harbour, BVI",
    image: "/portfolio/job-9.jpg",
  },
  {
    id: "caroline",
    title: "Caroline",
    category: "names" as const,
    location: "Auburn, AL",
    image: "/portfolio/job-11.jpg",
  },
  {
    id: "odyssey",
    title: "Odyssey",
    category: "names" as const,
    location: "Wilmington, DE",
    image: "/portfolio/job-7.jpg",
  },
  {
    id: "lexsea",
    title: "Lexsea",
    category: "names" as const,
    location: "35 Sport Coupe",
    image: "/portfolio/job-4.jpg",
  },
  {
    id: "bone-4-tuna",
    title: "Bone 4 Tuna",
    category: "graphics" as const,
    location: "Custom name",
    image: "/portfolio/job-3.jpg",
  },
  {
    id: "good-grief",
    title: "Good Grief",
    category: "names" as const,
    location: "Memphis, TN",
    image: "/portfolio/job-5.jpg",
  },
  {
    id: "watermark",
    title: "Watermark",
    category: "names" as const,
    location: "Kennebunkport, ME",
    image: "/portfolio/job-10.jpg",
  },
  {
    id: "waddle-we-do",
    title: "Waddle We Do",
    category: "graphics" as const,
    location: "Deerfield, IL",
    image: "/portfolio/job-16.jpg",
  },
  {
    id: "jemm-i-am",
    title: "Jemm I Am",
    category: "graphics" as const,
    location: "St. Thomas, U.S.V.I.",
    image: "/portfolio/job-20.jpg",
  },
  {
    id: "jacqueline",
    title: "Jacqueline",
    category: "names" as const,
    location: "Coral Gables, FL",
    image: "/portfolio/job-17.jpg",
  },
  {
    id: "rebaits",
    title: "Rebaits",
    category: "names" as const,
    location: "Ft. Lauderdale, FL",
    image: "/portfolio/job-25.jpg",
  },
  {
    id: "erector",
    title: "Erector",
    category: "graphics" as const,
    location: "Formula",
    image: "/portfolio/job-18.jpg",
  },
  {
    id: "sundancer",
    title: "Sundancer",
    category: "names" as const,
    location: "Dover",
    image: "/portfolio/job-14.jpg",
  },
  {
    id: "mission-xpress",
    title: "Mission Xpress",
    category: "names" as const,
    location: "Hull lettering",
    image: "/portfolio/job-15.jpg",
  },
  {
    id: "insanely-kimi",
    title: "Insanely Kimi",
    category: "names" as const,
    location: "Custom name",
    image: "/portfolio/job-21.jpg",
  },
  {
    id: "powerplay",
    title: "Powerplay",
    category: "names" as const,
    location: "Shop install",
    image: "/portfolio/job-22.jpg",
  },
  {
    id: "cocktails-dreams",
    title: "Cocktails & Dreams",
    category: "names" as const,
    location: "Marina",
    image: "/portfolio/job-24.jpg",
  },
  {
    id: "n264wb",
    title: "N264WB",
    category: "graphics" as const,
    location: "Aircraft lettering",
    image: "/portfolio/job-23.jpg",
  },
  {
    id: "ray-qualmann",
    title: "Ray Qualmann",
    category: "graphics" as const,
    location: "Vehicle graphics",
    image: "/portfolio/job-27.jpg",
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "names", label: "Boat Names" },
  { id: "graphics", label: "Graphics" },
] as const;

export const vinylColors = [
  { id: "white", name: "White", hex: "#f5f2ea" },
  { id: "black", name: "Black", hex: "#141414" },
  { id: "navy", name: "Navy", hex: "#102a43" },
  { id: "royal", name: "Royal Blue", hex: "#1d4e89" },
  { id: "teal", name: "Teal", hex: "#1f6f6a" },
  { id: "green", name: "Forest", hex: "#2f5d3a" },
  { id: "red", name: "Red", hex: "#9b1d20" },
  { id: "burgundy", name: "Burgundy", hex: "#6b1d2a" },
  { id: "orange", name: "Orange", hex: "#d35400" },
  { id: "yellow", name: "Yellow", hex: "#e3b505" },
  { id: "cream", name: "Cream", hex: "#efe3c4" },
  { id: "gold", name: "Gold", hex: "#c4a35a" },
  { id: "silver", name: "Silver", hex: "#b7b7b2" },
  { id: "gray", name: "Gray", hex: "#6d6d6d" },
  { id: "brown", name: "Brown", hex: "#5c4033" },
  { id: "pink", name: "Pink", hex: "#d48aa6" },
] as const;

export const previewBackgrounds = [
  { id: "transparent", name: "Transparent", hex: "transparent" },
  { id: "white", name: "White gelcoat", hex: "#f3efe6" },
  { id: "gray", name: "Light gray", hex: "#c8cdd3" },
  { id: "navy", name: "Navy hull", hex: "#0f2740" },
  { id: "black", name: "Black hull", hex: "#161616" },
  { id: "blue", name: "Royal", hex: "#1d4e89" },
  { id: "teal", name: "Teal hull", hex: "#1b4d4a" },
  { id: "green", name: "Forest", hex: "#2f5d3a" },
  { id: "sand", name: "Sand hull", hex: "#d8c7a5" },
  { id: "red", name: "Red hull", hex: "#6e1c1f" },
  { id: "burgundy", name: "Burgundy", hex: "#6b1d2a" },
] as const;

export const stripeSizes = [
  { id: "0.25", label: '1/4"', inches: 0.25 },
  { id: "0.5", label: '1/2"', inches: 0.5 },
  { id: "0.75", label: '3/4"', inches: 0.75 },
  { id: "1", label: '1"', inches: 1 },
  { id: "1.5", label: '1.5"', inches: 1.5 },
  { id: "2", label: '2"', inches: 2 },
  { id: "3", label: '3"', inches: 3 },
] as const;
