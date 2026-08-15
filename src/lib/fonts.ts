export type LetteringFont = {
  id: string;
  name: string;
  family: string;
  category: "script" | "serif" | "block" | "modern";
  width: number;
};

export const letteringFonts: LetteringFont[] = [
  { id: "cinzel", name: "Cinzel", family: '"Cinzel", serif', category: "serif", width: 0.78 },
  { id: "playfair", name: "Playfair", family: '"Playfair Display", serif', category: "serif", width: 0.62 },
  { id: "abril", name: "Abril Fatface", family: '"Abril Fatface", serif', category: "serif", width: 0.7 },
  { id: "cormorant", name: "Cormorant", family: '"Cormorant Garamond", serif', category: "serif", width: 0.55 },
  { id: "libre", name: "Baskerville", family: '"Libre Baskerville", serif', category: "serif", width: 0.62 },
  { id: "great-vibes", name: "Great Vibes", family: '"Great Vibes", cursive', category: "script", width: 0.58 },
  { id: "allura", name: "Allura", family: '"Allura", cursive', category: "script", width: 0.52 },
  { id: "pinyon", name: "Pinyon Script", family: '"Pinyon Script", cursive', category: "script", width: 0.6 },
  { id: "tangerine", name: "Tangerine", family: '"Tangerine", cursive', category: "script", width: 0.48 },
  { id: "sacramento", name: "Sacramento", family: '"Sacramento", cursive', category: "script", width: 0.5 },
  { id: "dancing", name: "Dancing Script", family: '"Dancing Script", cursive', category: "script", width: 0.56 },
  { id: "kaushan", name: "Kaushan", family: '"Kaushan Script", cursive', category: "script", width: 0.6 },
  { id: "bebas", name: "Bebas Neue", family: '"Bebas Neue", sans-serif', category: "block", width: 0.52 },
  { id: "oswald", name: "Oswald", family: '"Oswald", sans-serif', category: "block", width: 0.58 },
  { id: "anton", name: "Anton", family: '"Anton", sans-serif', category: "block", width: 0.62 },
  { id: "archivo", name: "Archivo Black", family: '"Archivo Black", sans-serif', category: "block", width: 0.72 },
  { id: "alfa", name: "Alfa Slab", family: '"Alfa Slab One", serif', category: "block", width: 0.8 },
  { id: "bungee", name: "Bungee", family: '"Bungee", sans-serif', category: "block", width: 0.78 },
  { id: "montserrat", name: "Montserrat", family: '"Montserrat", sans-serif', category: "modern", width: 0.64 },
  { id: "raleway", name: "Raleway", family: '"Raleway", sans-serif', category: "modern", width: 0.6 },
  { id: "orbitron", name: "Orbitron", family: '"Orbitron", sans-serif', category: "modern", width: 0.78 },
  { id: "russo", name: "Russo One", family: '"Russo One", sans-serif', category: "modern", width: 0.72 },
  { id: "josefin", name: "Josefin Sans", family: '"Josefin Sans", sans-serif', category: "modern", width: 0.56 },
  { id: "black-ops", name: "Black Ops", family: '"Black Ops One", sans-serif', category: "modern", width: 0.76 },
];

export const googleFontsHref =
  "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alfa+Slab+One&family=Allura&family=Anton&family=Archivo+Black&family=Bebas+Neue&family=Black+Ops+One&family=Cinzel:wght@500;700&family=Cormorant+Garamond:wght@600;700&family=Dancing+Script:wght@600;700&family=Great+Vibes&family=Josefin+Sans:wght@600;700&family=Kaushan+Script&family=Libre+Baskerville:wght@700&family=Montserrat:wght@600;700;800&family=Orbitron:wght@600;700&family=Oswald:wght@500;600;700&family=Pinyon+Script&family=Playfair+Display:wght@600;700;800&family=Raleway:wght@600;700;800&family=Russo+One&family=Sacramento&family=Tangerine:wght@700&display=swap";

export function formatRegistration(value: string) {
  const compact = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  if (compact.length <= 2) return compact;
  if (compact.length <= 6) return `${compact.slice(0, 2)} ${compact.slice(2)}`;
  return `${compact.slice(0, 2)} ${compact.slice(2, -2)} ${compact.slice(-2)}`;
}

export function estimateWidthInches(text: string, heightIn: number, widthFactor: number) {
  if (!text.trim()) return 0;
  return Number((text.length * heightIn * widthFactor * 0.72).toFixed(1));
}
