export interface Project {
    number: string;
    title: string;
    category: string;
    image: string;
}

const projects: Project[] = [
    {
        number: "01",
        title: "NOVA IDENTITY CAMPAIGN",
        category: "Branding · Creative Direction",
        image: "https://images.unsplash.com/photo-1554192833-a5cd504427dd?w=800&auto=format&fit=crop&q=60",
    },
    {
        number: "02",
        title: "MOTION LAB STUDIO",
        category: "Video Editing · VFX",
        image: "https://images.unsplash.com/photo-1625982503303-5a3e849260a7?q=80&w=800&auto=format&fit=crop",
    },
    {
        number: "03",
        title: "ELEVATE BRAND FILMS",
        category: "Video Production · Strategy",
        image: "https://images.unsplash.com/photo-1543788454-3738a5885682?q=80&w=800&auto=format&fit=crop",
    },
    {
        number: "04",
        title: "PULSE DIGITAL ADS",
        category: "Digital Marketing · UI/UX",
        image: "https://images.unsplash.com/photo-1739382121077-7a20fed13566?q=80&w=800&auto=format&fit=crop",
    },
    {
        number: "05",
        title: "VERTEX CREATIVE SYSTEM",
        category: "Branding · Web Design",
        image: "https://images.unsplash.com/photo-1543100716-159c0313ba9d?q=80&w=800&auto=format&fit=crop",
    },
    {
        number: "06",
        title: "FRAME & FLOW PROJECT",
        category: "Creative Direction · E-Commerce",
        image: "https://images.unsplash.com/photo-1682687981603-ae874bf432f2?q=80&w=800&auto=format&fit=crop",
    },
];

export default projects;
