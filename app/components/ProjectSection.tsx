"use client";

import { useState } from "react";
import Image from "next/image";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import projects from "../data/Project";

export default function ProjectSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full bg-[#111] overflow-hidden min-h-screen flex flex-col text-white font-sans">

            {/* ── Full-screen background image (Changes on Hover) ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatePresence mode="wait">
                    {activeIndex !== null && (
                        <motion.div
                            key={projects[activeIndex].image}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={projects[activeIndex].image}
                                alt={projects[activeIndex].title}
                                fill
                                className="object-cover object-center"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* Heavy Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-[#0a0a0a]/80 transition-opacity duration-500" />
            </div>

            {/* ── Content Container ── */}
            <div className="relative z-10 w-full flex flex-col h-full">
                <div className="w-full flex items-start px-8 pt-10">
                    <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
                        Work
                    </p>
                </div>

                {/* List of Projects */}
                <div className="flex flex-col w-full mt-4">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className="group relative w-full flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/5 cursor-pointer hover:bg-white/2 transition-colors duration-300 px-8"
                        >
                            {/* Left Side: Number + Title */}
                            {/* Left Side: Number + Title */}
                            <div className="flex items-center gap-12 md:gap-24">
                                <span className="text-[#857e30] text-xs font-mono group-hover:text-[#888] transition-colors">
                                    {project.number}
                                </span>

                                <div className="flex flex-col">
                                    <h2 className="text-[#888] font-display group-hover:text-white text-base md:text-xl lg:text-2xl font-light transition-colors duration-300 uppercase tracking-wide">
                                        {project.title}
                                    </h2>

                                    {/* Mobile Category */}
                                    <span className="md:hidden mt-2 text-[#555] text-[10px] tracking-[0.2em] uppercase group-hover:text-[#888] transition-colors">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Desktop Category */}
                            <div className="hidden md:flex items-center justify-center text-right">
                                <span className="text-[#555] text-[10px] md:text-xs tracking-[0.2em] uppercase group-hover:text-[#888] transition-colors">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}