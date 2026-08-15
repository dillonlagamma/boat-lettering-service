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
    image: "/portfolio/champagne-cher.png",
    alt: "Gold Champagne Cher script lettering and Wilmington port on a white yacht transom",
    imagePosition: "center 45%",
  },
  {
    slug: "graphics",
    title: "Graphics & Decals",
    blurb: "Logos, fish, flags, and full-color printed graphics in marine-grade vinyl that holds up to Florida sun and salt.",
    image: "/portfolio/reel-blue.png",
    alt: "Reel Blue script lettering with a sailfish graphic and Pompano Beach port",
    imagePosition: "center 40%",
  },
  {
    slug: "registration",
    title: "Registration & Ports",
    blurb: "Documented numbers, state registration, and hailing ports sized to the rules — 3\" numbers, 2.5\" or 4\" ports.",
    image: "/portfolio/bluefin.png",
    alt: "BLUEFIN name and JUPITER hailing port on a white sportfishing transom",
    imagePosition: "center 40%",
  },
  {
    slug: "wraps",
    title: "Vinyl Wraps",
    blurb: "Partial or full hull wraps, transom wraps, and accent panels. A new look without a full paint job.",
    image: "/portfolio/turtle-iv.png",
    alt: "TURTLE-IV hull lettering with a mermaid graphic on a white center console",
    imagePosition: "center 55%",
  },
  {
    slug: "signs",
    title: "Boat Signs",
    blurb: "LED, carved, metal, and plastic signs for yachts and fleets — plus hand lettering and gold or silver leaf.",
    image: "/portfolio/sundance-marine.png",
    alt: "Sundance Marine boat sales, service, and storage sign on a South Florida boat storage building",
    imagePosition: "center 20%",
  },
  {
    slug: "striping",
    title: "Hull Striping",
    blurb: "Boot stripes and accent pinstripes in 2 mil high-performance vinyl. We install, or we ship 150 ft rolls for DIY.",
    image: "/portfolio/pursuit-of-paradise.png",
    alt: "Pursuit of Paradise script lettering above a black boot stripe on a white Pursuit hull",
    imagePosition: "center 60%",
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
    id: "lady-k",
    title: "Lady K",
    category: "names" as const,
    location: "George Town",
    image: "/portfolio/lady-k.png",
  },
  {
    id: "baer-essential-yacht",
    title: "Baer Essential",
    category: "names" as const,
    location: "Ft. Lauderdale, FL",
    image: "/portfolio/baer-essential-yacht.png",
  },
  {
    id: "champagne-cher",
    title: "Champagne Cher",
    category: "names" as const,
    location: "Wilmington, DE",
    image: "/portfolio/champagne-cher.png",
  },
  {
    id: "reel-blue",
    title: "Reel Blue",
    category: "graphics" as const,
    location: "Pompano Beach, FL",
    image: "/portfolio/reel-blue.png",
  },
  {
    id: "pursuit-of-paradise",
    title: "Pursuit of Paradise",
    category: "names" as const,
    location: "Hull lettering",
    image: "/portfolio/pursuit-of-paradise.png",
  },
  {
    id: "sea-cow-ii",
    title: "Sea Cow II",
    category: "graphics" as const,
    location: "Pompano Beach, FL",
    image: "/portfolio/sea-cow-ii.png",
  },
  {
    id: "wing-it",
    title: "Wing It",
    category: "graphics" as const,
    location: "Ft. Lauderdale, FL",
    image: "/portfolio/wing-it.png",
  },
  {
    id: "bluefin",
    title: "Bluefin",
    category: "names" as const,
    location: "Jupiter, FL",
    image: "/portfolio/bluefin.png",
  },
  {
    id: "breakin-waves",
    title: "Breakin' Waves",
    category: "names" as const,
    location: "Pompano Beach, FL",
    image: "/portfolio/breakin-waves.png",
  },
  {
    id: "anchored-in-christ",
    title: "Anchored in Christ",
    category: "names" as const,
    location: "Dania Beach, FL",
    image: "/portfolio/anchored-in-christ.png",
  },
  {
    id: "ocean-bliss",
    title: "Ocean Bliss",
    category: "graphics" as const,
    location: "Regal",
    image: "/portfolio/ocean-bliss.png",
  },
  {
    id: "turtle-iv",
    title: "Turtle-IV",
    category: "graphics" as const,
    location: "Custom graphics",
    image: "/portfolio/turtle-iv.png",
  },
  {
    id: "buddy",
    title: "Buddy",
    category: "names" as const,
    location: "Deerfield Beach, FL",
    image: "/portfolio/buddy.png",
  },
  {
    id: "so-conversation",
    title: "So Conversation...",
    category: "names" as const,
    location: "Fort Lauderdale, FL",
    image: "/portfolio/so-conversation.png",
  },
  {
    id: "baer-essential",
    title: "Baer Essential",
    category: "names" as const,
    location: "Ft. Lauderdale, FL",
    image: "/portfolio/baer-essential.png",
  },
  {
    id: "tt-baer-essential",
    title: "T/T Baer Essential",
    category: "names" as const,
    location: "Yacht tender",
    image: "/portfolio/tt-baer-essential.png",
  },
  {
    id: "sundance-marine",
    title: "Sundance Marine",
    category: "graphics" as const,
    location: "Boat storage sign",
    image: "/portfolio/sundance-marine.png",
  },
  {
    id: "miss-q",
    title: "Miss Q",
    category: "graphics" as const,
    location: "Ray Qualmann Marine",
    image: "/portfolio/miss-q.png",
  },
  {
    id: "waxtheboat",
    title: "Wax the Boat",
    category: "graphics" as const,
    location: "Vehicle lettering",
    image: "/portfolio/waxtheboat.png",
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
