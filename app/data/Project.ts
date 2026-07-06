export type MediaType = "image" | "video";

export interface Project {
  number: string;
  title: string;
  description: string;
  category: string;
  services: string[];
  image: string;
  gallery?: string[];
  video?: string;
  mediaType: MediaType;
  href: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Arjuna Agro",
    description:
      "Comprehensive visual content production including product photography, commercial video shoots, social media creatives, and promotional banners to strengthen brand presence across digital platforms.",
    category: "Agriculture & FMCG",
    services: [
      "Product Photography",
      "Video Production",
      "Social Media Design",
      "Banner Design",
    ],
    // Replace with real image: /work/arjuna-agro/cover.webp
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=900&auto=format&fit=crop&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=75",
      "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=900&auto=format&fit=crop&q=75",
    ],
    video: "/work/arjuna-agro/showcase.mp4",
    mediaType: "video",
    href: "/work/arjuna-agro",
  },

  {
    number: "02",
    title: "Atmosphere",
    description:
      "Creative content strategy and production featuring professional video shoots, social media campaigns, branded post designs, and marketing banners tailored for audience engagement.",
    category: "Lifestyle Brand",
    services: [
      "Video Production",
      "Content Creation",
      "Social Media Design",
      "Marketing Creatives",
    ],
    // Replace with real image: /work/atmosphere/cover.webp
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=900&auto=format&fit=crop&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&auto=format&fit=crop&q=75",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&auto=format&fit=crop&q=75",
    ],
    video: "/work/atmosphere/showreel.mp4",
    mediaType: "video",
    href: "/work/atmosphere",
  },

  {
    number: "03",
    title: "Kids & Needs",
    description:
      "Designed engaging social media posts and promotional banners focused on improving brand communication and creating a playful yet professional visual identity.",
    category: "Kids & Retail",
    services: [
      "Social Media Posts",
      "Banner Design",
      "Creative Design",
    ],
    // Replace with real image: /work/kids-and-needs/cover.webp
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=75",
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=900&auto=format&fit=crop&q=75",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&auto=format&fit=crop&q=75",
    ],
    mediaType: "image",
    href: "/work/kids-and-needs",
  },

  {
    number: "04",
    title: "Dhanrova",
    description:
      "Professional product photography project highlighting product details, textures, and premium presentation for digital marketing and catalog use.",
    category: "Product Photography",
    services: [
      "Product Photography",
      "Creative Direction",
      "Commercial Photography",
    ],
    // Replace with real image: /work/dhanrova/cover.webp
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&auto=format&fit=crop&q=75",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=75",
    ],
    mediaType: "image",
    href: "/work/dhanrova",
  },

  {
    number: "05",
    title: "Alchemy",
    description:
      "Produced high-impact product videos focused on storytelling, motion, and product presentation to elevate brand perception and drive customer engagement.",
    category: "Product Marketing",
    services: [
      "Product Video Shoot",
      "Video Editing",
      "Motion Graphics",
    ],
    // Replace with real image: /work/alchemy/cover.webp
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&auto=format&fit=crop&q=75",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&auto=format&fit=crop&q=75",
    ],
    video: "/work/alchemy/product-film.mp4",
    mediaType: "video",
    href: "/work/alchemy",
  },
];

export default projects;
