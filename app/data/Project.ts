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
      "A full production run for an agriculture and FMCG brand: product photography, a commercial video shoot, and the social and banner creative needed to carry that visual identity across every platform.",
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
      "A content engine for a restaurant brand: social campaigns, menu promotions, and branded content designed to create a memorable dining experience while maintaining a consistent visual identity across every customer touchpoint.",
    category: "Restaurant",
    services: [
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
      "Social and promotional design for a kids' retail brand — playful enough to stand out in a feed, polished enough to hold the trust a retail audience expects.",
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
      "Studio product photography built to hold up in a catalog: controlled lighting, true-to-product color, and compositions that keep the detail and texture a premium listing needs.",
    category: "Product Photography",
    services: [
      "Product Photography",
      "Creative Direction",
      "Commercial Photography",
    ],
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
      "A serum launch told through motion: a product video shoot built around texture and light, cut and finished with motion graphics that give the formula room to breathe on screen.",
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