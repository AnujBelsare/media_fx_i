"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../data/Project";

gsap.registerPlugin(ScrollTrigger);

/* Keep every card's ratio within a tasteful range so a rare
   panoramic or ultra-tall photo can't blow up the grid — but
   the range is wide enough that almost no real photo actually
   needs to be cropped to fit it. */
const MIN_RATIO = 0.62; // tall portrait limit
const MAX_RATIO = 1.65; // wide landscape limit

/* ── Cursor follower — only shown when hovering a card ── */
function CursorFollower({ visible }: { visible: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const cur = useRef({ x: 0, y: 0 });
    const rafId = useRef<number>(0);

    useEffect(() => {
        const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
        window.addEventListener("mousemove", move);
        const loop = () => {
            cur.current.x += (pos.current.x - cur.current.x) * 0.1;
            cur.current.y += (pos.current.y - cur.current.y) * 0.1;
            if (ref.current) {
                ref.current.style.transform = `translate(${cur.current.x - 50}px,${cur.current.y - 50}px)`;
            }
            rafId.current = requestAnimationFrame(loop);
        };
        rafId.current = requestAnimationFrame(loop);
        return () => {
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-[100px] h-[100px] flex items-center justify-center"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-[8px] font-bold tracking-[0.18em] uppercase text-center leading-tight px-2">
                    View<br />Work
                </span>
            </div>
        </div>
    );
}

/* ── Single card ── */
function ProjectCard({
    project,
    index,
    onEnter,
    onLeave,
}: {
    project: typeof projects[0];
    index: number;
    onEnter: () => void;
    onLeave: () => void;
}) {
    const [hovered, setHovered] = useState(false);
    const [ratio, setRatio] = useState<number | null>(null);
    const [loaded, setLoaded] = useState(false);

    const handleEnter = () => { setHovered(true); onEnter(); };
    const handleLeave = () => { setHovered(false); onLeave(); };

    /* Placeholder ratio shown only until the real image dimensions
       are known — alternated purely so the pre-load skeleton grid
       doesn't look uniform/flat. Has no bearing on final crop. */
    const skeletonRatio = index % 3 === 0 ? 0.75 : index % 3 === 1 ? 1.333 : 1;

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        if (img.naturalWidth && img.naturalHeight) {
            const natural = img.naturalWidth / img.naturalHeight;
            setRatio(Math.min(MAX_RATIO, Math.max(MIN_RATIO, natural)));
        }
        setLoaded(true);
    };

    const displayRatio = ratio ?? skeletonRatio;

    return (
        <Link
            href={project.href}
            className="work-card group block cursor-none"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            aria-label={`View ${project.title}`}
        >
            {/* Image container — sized to the photo's own proportions
                once known, so object-cover has nothing left to crop */}
            <div
                className="relative w-full overflow-hidden bg-[#f0f0ee]"
                style={{ aspectRatio: displayRatio, transition: "aspect-ratio 0.4s ease" }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover transition-all duration-700 ease-out"
                    style={{
                        transform: hovered ? "scale(1.04)" : "scale(1)",
                        opacity: loaded ? 1 : 0,
                    }}
                    loading={index < 2 ? "eager" : "lazy"}
                    quality={85}
                    onLoad={handleImageLoad}
                />

                {/* Soft shimmer while dimensions/image are still loading */}
                {!loaded && (
                    <div className="absolute inset-0 bg-[#e9e9e6] animate-pulse" />
                )}

                {/* Hover overlay */}
                <div
                    className="absolute inset-0 bg-black transition-opacity duration-500"
                    style={{ opacity: hovered ? 0.5 : 0 }}
                />

                {/* Centered "View Project" text on hover */}
                <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                    style={{ opacity: hovered ? 1 : 0 }}
                >
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white border border-white/60 px-5 py-2.5">
                        View Project
                    </span>
                </div>
            </div>

            {/* Caption below image */}
            <div className="mt-4 flex items-start justify-between">
                <div>
                    <h3 className="font-sans text-black text-sm font-medium tracking-[0.05em] uppercase leading-tight">
                        {project.title}
                    </h3>
                    <p className="font-sans text-black/40 text-[11px] tracking-[0.12em] uppercase mt-1">
                        {project.category}
                    </p>
                </div>
                <span className="font-mono text-black/25 text-[10px] mt-0.5 shrink-0 ml-4">
                    {project.number}
                </span>
            </div>
        </Link>
    );
}

/* ── Main section ── */
export default function ProjectSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".col-left .work-card").forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        delay: i * 0.05,
                        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
                    }
                );
            });
            gsap.utils.toArray<HTMLElement>(".col-right .work-card").forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 65 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        delay: i * 0.05 + 0.12,
                        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
                    }
                );
            });
            gsap.fromTo(".work-section-heading",
                { opacity: 0, y: 28 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                    scrollTrigger: { trigger: ".work-section-heading", start: "top 88%" },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const leftProjects = projects.filter((_, i) => i % 2 === 0);
    const rightProjects = projects.filter((_, i) => i % 2 !== 0);

    return (
        <>
            {/* Cursor only visible when hovering a card — no section-level trigger */}
            <CursorFollower visible={cursorVisible} />

            <section
                ref={sectionRef}
                id="work"
                className="w-full bg-white py-24 md:py-32"
            >
                {/* Section header */}
                <div className="work-section-heading max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.35em] uppercase mb-4 font-sans">
                            Selected Work
                        </p>
                        <h2
                            className="font-display font-light text-black leading-[0.95] tracking-[-0.01em]"
                            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
                        >
                            Projects that<br />
                            <em>move people</em>
                        </h2>
                    </div>
                    <p className="text-black/35 text-[11px] font-sans tracking-[0.12em] uppercase max-w-[220px] leading-relaxed">
                        A curated selection of recent campaigns &amp; creative work.
                    </p>
                </div>

                {/* ── 2-column editorial grid ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

                    {/* Desktop */}
                    <div className="hidden md:grid grid-cols-2 gap-x-10 lg:gap-x-16 items-start">
                        <div className="col-left flex flex-col gap-14">
                            {leftProjects.map((p, i) => (
                                <ProjectCard
                                    key={p.number}
                                    project={p}
                                    index={i * 2}
                                    onEnter={() => setCursorVisible(true)}
                                    onLeave={() => setCursorVisible(false)}
                                />
                            ))}
                        </div>
                        {/* Right column offset down for editorial rhythm */}
                        <div className="col-right flex flex-col gap-14 mt-32">
                            {rightProjects.map((p, i) => (
                                <ProjectCard
                                    key={p.number}
                                    project={p}
                                    index={i * 2 + 1}
                                    onEnter={() => setCursorVisible(true)}
                                    onLeave={() => setCursorVisible(false)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile — single column */}
                    <div className="flex md:hidden flex-col gap-12">
                        {projects.map((p, i) => (
                            <ProjectCard
                                key={p.number}
                                project={p}
                                index={i}
                                onEnter={() => setCursorVisible(true)}
                                onLeave={() => setCursorVisible(false)}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-20 md:mt-24 flex justify-center">
                    <Link
                        href="/work"
                        className="text-[11px] font-bold tracking-[0.22em] uppercase px-8 py-4 border border-black/20 text-black/50 hover:border-black hover:text-black transition-all duration-300 font-sans"
                    >
                        View All Projects
                    </Link>
                </div>
            </section>
        </>
    );
}