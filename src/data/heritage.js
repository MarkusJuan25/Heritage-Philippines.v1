export const image = (path) =>
  `/images/${path.replace(/^\/+/, "")}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Story", to: "/story" },
  { label: "Experiences", to: "/experiences" },
  { label: "Packages", to: "/packages" },
  { label: "Stories", to: "/stories" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Plan", to: "/plan" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Login", to: "/login" },
];

export const stageActs = [
  {
    kicker: "Act I - Origins",
    label: "Origins",
    title: "Roots",
    to: "/roots",
    cta: "Enter Act I",
    image: image("roots-origins/banaue-rice-terraces.jpg"),
    description:
      "Trace the landscapes, memories, and ancestry that first gave your story its name.",
  },
  {
    kicker: "Act II - Experience",
    label: "Experience",
    title: "Journey",
    to: "/journey",
    cta: "Enter Act II",
    image: image("journey-culture-movement/kamayan-style.jpg"),
    description:
      "Move through food, ritual, and shared encounters that keep heritage alive in the present.",
  },
  {
    kicker: "Act III - Emotion",
    label: "Belonging",
    title: "Homecoming",
    to: "/homecoming",
    cta: "Enter Act III",
    image: image("homecoming-emotion/sunset-over-the-sky-reflections.jpg"),
    description:
      "Return to reunion, belonging, and the warmth of finally arriving where the story lands.",
  },
];

export const homeHighlights = [
  {
    kicker: "Heritage",
    title: "Make memory tangible",
    text: "See how language, food, ritual, and place continue to shape who you are today.",
  },
  {
    kicker: "Identity",
    title: "Follow family history",
    text: "Reconnect with ancestral places in settings that help personal stories feel grounded and real.",
  },
  {
    kicker: "Belonging",
    title: "Arrive with meaning",
    text: "Create moments of recognition that make home feel larger than a single address.",
  },
  {
    kicker: "Legacy",
    title: "Carry it forward",
    text: "Build journeys worth passing down so memory becomes part of the next generation too.",
  },
];

export const experiences = [
  {
    id: "palawan",
    place: "Palawan",
    title: "Palawan Escape",
    image: image("experiences-destinations/beach-lagoon.jpg"),
    text: "Lagoon light, island quiet, and coastal storytelling create a cinematic chapter shaped by pause and wonder.",
  },
  {
    id: "bohol",
    place: "Bohol",
    title: "Bohol Discovery",
    image: image("experiences-destinations/chocolate-hills-with-touch-of-mist.jpg"),
    text: "Soft hills, countryside movement, and living tradition make this a warm, story-rich Visayas experience.",
  },
  {
    id: "vigan",
    place: "Ilocos",
    title: "Vigan Heritage Walk",
    image: image("experiences-destinations/a-glimpse-of-vigan-city.jpg"),
    text: "Cobblestone streets, preserved architecture, and layered family memory turn this stop into lived history.",
  },
  {
    id: "batanes",
    place: "Batanes",
    title: "Batanes Kinship Route",
    image: image("beach-images/marlboro-country-batanes-lanscapes.jpg"),
    text: "Rolling hills, stone homes, and quiet coastal rituals make space for reflection and reconnection.",
  },
];

export const packages = [
  {
    title: "Ancestral Discovery",
    length: "4 days",
    price: "From PHP 38,000",
    image: image("packages-luxury-feel/welcoming-host.jpg"),
    text: "A gentle first return built around family history, guided visits, and local storytelling.",
  },
  {
    title: "Island Heritage Retreat",
    length: "5 days",
    price: "From PHP 62,000",
    image: image("packages-luxury-feel/calm-bay-with-scenic-sunset.jpg"),
    text: "A slower coastal journey with boutique stays, food encounters, and quiet cultural immersion.",
  },
  {
    title: "Luxury Homecoming",
    length: "7 days",
    price: "Custom quote",
    image: image("packages-luxury-feel/yacht-cruise.jpg"),
    text: "A premium end-to-end itinerary for families returning together with private hosting and concierge support.",
  },
];

export const stories = [
  {
    title: "The road back to a simple life",
    image: image("stories-editorial-style/simple-life.jpg"),
    text: "A quiet province visit becomes a reminder that home can be found in small gestures and familiar routines.",
  },
  {
    title: "Planning the return",
    image: image("stories-editorial-style/planning.jpg"),
    text: "A second-generation traveler builds a journey around the stories her grandparents carried overseas.",
  },
  {
    title: "What the old places still teach",
    image: image("stories-editorial-style/might-find-the-old.jpg"),
    text: "A heritage walk reveals architecture, craft, and family memory living side by side.",
  },
];

export const galleryImages = [
  { src: image("gallery-visual-impact/a-line-of-palmtrees-you-miss.jpg"), alt: "Palm trees framing a tropical path", size: "tall" },
  { src: image("gallery-visual-impact/a-touch-of-culture.jpg"), alt: "Cultural textile detail", size: "wide" },
  { src: image("gallery-visual-impact/smiling-faces.jpg"), alt: "Warm Filipino welcome", size: "" },
  { src: image("gallery-visual-impact/weaving-fabrics.jpg"), alt: "Traditional weaving fabrics", size: "" },
  { src: image("gallery-visual-impact/weaving-hands.jpg"), alt: "Hands weaving heritage craft", size: "wide" },
  { src: image("gallery-visual-impact/weaving-the-basket.jpg"), alt: "Basket weaving craft", size: "" },
  { src: image("home-hero-story-preview/misty-mountain.jpg"), alt: "Misty mountain landscape", size: "tall" },
  { src: image("homecoming-emotion/dining-together.jpg"), alt: "Family dining together", size: "" },
];

export const actPages = {
  roots: {
    eyebrow: "Act I - Origins",
    title: "Roots",
    heroImage: image("roots-origins/mountain-terraces.jpg"),
    summary:
      "Begin with place, memory, and identity through landscapes and stories that shaped the family line.",
    quote: "The first act asks where the story began, then lets the land answer slowly.",
    highlights: [
      "Ancestral town visits and guided family-history walks",
      "Rice terrace, heritage house, and mountain landscape experiences",
      "Reflection prompts for travelers returning with family stories",
    ],
    gallery: [
      image("roots-origins/banaue-rice-terraces.jpg"),
      image("roots-origins/family.jpg"),
      image("roots-origins/clouds-over-mountain.jpg"),
    ],
  },
  journey: {
    eyebrow: "Act II - Experience",
    title: "Journey",
    heroImage: image("journey-culture-movement/feastive-color.jpg"),
    summary:
      "Follow culture in motion through meals, rituals, routes, and shared moments that keep tradition alive.",
    quote: "The middle of the journey is where heritage becomes something you can taste, hear, and join.",
    highlights: [
      "Food-led experiences, from family cooking to kamayan meals",
      "Festival color, city walks, and scenic routes across regions",
      "Local hosts who connect culture with lived personal stories",
    ],
    gallery: [
      image("journey-culture-movement/family-cooking.jpg"),
      image("journey-culture-movement/a-yummy-food.jpg"),
      image("journey-culture-movement/townscape-in-night-at-manila.jpg"),
    ],
  },
  homecoming: {
    eyebrow: "Act III - Emotion",
    title: "Homecoming",
    heroImage: image("homecoming-emotion/culture-and-tradition.jpg"),
    summary:
      "Close the story in reunion, gratitude, and the feeling of finally returning to what matters most.",
    quote: "The final act is not just arrival. It is recognition, reunion, and the warmth of being expected.",
    highlights: [
      "Family reunion pacing with room for rest and celebration",
      "Golden-hour gatherings, local hosting, and shared meals",
      "Closing rituals that help travelers carry the journey forward",
    ],
    gallery: [
      image("homecoming-emotion/happy-family.jpg"),
      image("homecoming-emotion/golden-hour.jpg"),
      image("homecoming-emotion/embracing-peaple.jpg"),
    ],
  },
};

export const partnerLogos = [
  { src: image("logo-images/highlighttours-logo-white-1024x318-with-bg.jpg"), alt: "Highlight Tours" },
  { src: image("logo-images/dot-logo-1.png"), alt: "Department of Tourism" },
  { src: image("logo-images/aita-logo2025.png"), alt: "AITA" },
  { src: image("logo-images/ptaa-3x3-1.gif"), alt: "PTAA" },
];


