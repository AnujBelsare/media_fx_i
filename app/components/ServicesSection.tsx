"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    number: "01",
    category: "Strategy",
    items: [
      "VIDEO EDITING",
      "BRANDING",
      "DIGITAL MARKETING",
      "PRODUCT SHOOTS",
    ],
    description:
      "we combine strategy, branding, video editing, and digital marketing to build strong brand identities and engaging content. from creative storytelling to performance-driven communication, every project is designed to connect with audiences and create lasting impact.",
  },

  {
    number: "02",
    category: "Design",
    items: [
      "WEB DESIGN",
      "UI/UX DESIGN",
      "CREATIVE DESIGN",
      "INTERACTION DESIGN",
    ],
    description:
      "we design digital experiences with a tailored approach, combining web design, ui/ux, creative design, and interaction design to create intuitive, modern, and visually impactful interfaces that strengthen brand identity and enhance user engagement.",
  },

  {
    number: "03",
    category: "Development",
    items: [
      "CUSTOM WEBSITES",
      "E-COMMERCE",
      "HEADLESS CMS",
    ],
    description:
      "we develop custom websites, e-commerce platforms, and headless cms solutions built for performance, flexibility, and scalability. combining clean development with seamless user experience, we create digital products that are fast, functional, and tailored to the needs of each brand.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay: i * 0.13,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-6 md:px-10 lg:px-16 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* section label */}
        <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.3em] uppercase mb-12">
          Services
        </p>

        {/* top divider */}
        <div className="border-t border-black/10" />

        {services.map((service, i) => (
          <motion.div
            key={service.number}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >

            {/* row */}
            <div className="flex flex-col md:flex-row py-16 md:py-24 border-b border-black/10">

              {/* left */}
              <div className="w-full md:w-[48%] mb-10 md:mb-0">

                <span className="block text-[#E8C832] text-[11px] tracking-widest mb-3">
                  {service.number}.
                </span>

                <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] leading-[0.9] font-display font-light tracking-tighter">
                  {service.category}
                </h2>

              </div>

              {/* right */}
              <div className="w-full md:w-[52%] pt-2">

                {/* tags */}
                <ul className="space-y-3 mb-14">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="uppercase text-[15px] leading-none tracking-[-0.02em] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* description */}
                <p className="max-w-130 text-black/55 leading-[1.8] text-[15px]">
                  {service.description}
                </p>

              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}