"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../data/Project";

gsap.registerPlugin(ScrollTrigger);

/* Keep every card's ratio within a tasteful range so a rare
   panoramic or ultra-tall photo can't blow up the grid — but
   the range is wide enough that almost no real photo actually
   needs to be cropped to fit it. */
const MIN_RATIO = 0.62; // tall portrait limit
const MAX_RATIO = 1.65; // wide landscape limit

export default function WorkPage() {
    const ref = useRef<HTMLDivElement>(null);
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        delay: (i % 2) * 0.12,
                        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
                    }
                );
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const left = projects.filter((_, i) => i % 2 === 0);
    const right = projects.filter((_, i) => i % 2 !== 0);

    return (
        <>
            <CursorDot visible={cursorVisible} />
            <Navbar />
            <main className="min-h-screen bg-white pt-14">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-14">
                    <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.35em] uppercase mb-4 font-sans">Portfolio</p>
                    <h1
                        className="font-display font-light text-black leading-[0.95] tracking-[-0.01em]"
                        style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
                    >
                        All Projects
                    </h1>
                </div>

                {/* Grid */}
                <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-24">
                    {/* Desktop 2-col */}
                    <div className="hidden md:grid grid-cols-2 gap-x-10 lg:gap-x-16 items-start">
                        <div className="flex flex-col gap-14">
                            {left.map((p, i) => (
                                <WorkCard
                                    key={p.number} project={p} index={i * 2}
                                    onEnter={() => setCursorVisible(true)}
                                    onLeave={() => setCursorVisible(false)}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-14 mt-32">
                            {right.map((p, i) => (
                                <WorkCard
                                    key={p.number} project={p} index={i * 2 + 1}
                                    onEnter={() => setCursorVisible(true)}
                                    onLeave={() => setCursorVisible(false)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className="flex md:hidden flex-col gap-12">
                        {projects.map((p, i) => (
                            <WorkCard
                                key={p.number} project={p} index={i}
                                onEnter={() => setCursorVisible(true)}
                                onLeave={() => setCursorVisible(false)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function WorkCard({ project, index, onEnter, onLeave }: {
    project: typeof projects[0];
    index: number;
    onEnter: () => void;
    onLeave: () => void;
}) {
    const [hovered, setHovered] = useState(false);
    const [ratio, setRatio] = useState<number | null>(null);
    const [loaded, setLoaded] = useState(false);

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
            onMouseEnter={() => { setHovered(true); onEnter(); }}
            onMouseLeave={() => { setHovered(false); onLeave(); }}
            aria-label={`View ${project.title}`}
        >
            <div
                className="relative w-full overflow-hidden bg-[#f5f5f3]"
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
                    <div className="absolute inset-0 bg-[#eaeae7] animate-pulse" />
                )}

                <div
                    className="absolute inset-0 bg-black transition-opacity duration-500"
                    style={{ opacity: hovered ? 0.5 : 0 }}
                />
                <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
                    style={{ opacity: hovered ? 1 : 0 }}
                >
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white border border-white/60 px-5 py-2.5">
                        View Project
                    </span>
                </div>
            </div>
            <div className="mt-4 flex items-start justify-between">
                <div>
                    <h3 className="font-sans text-black text-sm font-medium tracking-[0.05em] uppercase">{project.title}</h3>
                    <p className="font-sans text-black/40 text-[11px] tracking-[0.12em] uppercase mt-1">{project.category}</p>
                </div>
                <span className="font-mono text-black/25 text-[10px] mt-0.5">{project.number}</span>
            </div>
        </Link>
    );
}

function CursorDot({ visible }: { visible: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const cur = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
        window.addEventListener("mousemove", move);
        let raf: number;
        const loop = () => {
            cur.current.x += (pos.current.x - cur.current.x) * 0.1;
            cur.current.y += (pos.current.y - cur.current.y) * 0.1;
            if (ref.current) ref.current.style.transform = `translate(${cur.current.x - 50}px,${cur.current.y - 50}px)`;
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
    }, []);
    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-[100px] h-[100px] flex items-center justify-center"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-[8px] font-bold tracking-[0.18em] uppercase text-center leading-tight px-2">View<br />Work</span>
            </div>
        </div>
    );
}