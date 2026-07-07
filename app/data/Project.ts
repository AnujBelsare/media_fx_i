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

    image: "https://res.cloudinary.com/deja36fv7/image/upload/v1783408087/arjuna-agro-cover_xmvxfe.webp",
    video: "https://res.cloudinary.com/deja36fv7/video/upload/v1783409221/AgroShoot_1_ohnlkm.mov",
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
    image: "https://res.cloudinary.com/deja36fv7/image/upload/v1783408089/atmosphere-cover_icqfm3.webp",
    gallery: [
      "https://res.cloudinary.com/deja36fv7/image/upload/v1783408086/atmosphere1_pbwv0s.webp",
    ],
    mediaType: "image",
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
    image: "https://res.cloudinary.com/deja36fv7/image/upload/v1783408088/kids-and-needs-cover_xwep4b.webp",
    gallery: [
      "https://res.cloudinary.com/deja36fv7/image/upload/v1783408088/kids-and-need1_d0eytu.webp",
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
    image: "https://res.cloudinary.com/deja36fv7/image/upload/v1783408087/dhanrova-cover_jm6rmq.webp",
    gallery: [
      "https://res.cloudinary.com/deja36fv7/image/upload/v1783408086/dhanova1_uvzaxa.webp",
      "https://res.cloudinary.com/deja36fv7/image/upload/v1783408087/dhanrova2_frmcdp.webp",
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
    image: "https://res.cloudinary.com/deja36fv7/image/upload/v1783408085/alchemy-cover_ymv1dh.webp",
    video: "https://res.cloudinary.com/deja36fv7/video/upload/v1783408326/serumShoot_err2vg.mov",
    mediaType: "video",
    href: "/work/alchemy",
  },
];

export default projects;
