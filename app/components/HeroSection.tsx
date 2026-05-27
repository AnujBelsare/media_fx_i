"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center pt-14">

            {/* Subtle yellow accent blob */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "10%",
                    right: "-5%",
                    width: "clamp(280px, 40vw, 560px)",
                    height: "clamp(280px, 40vw, 560px)",
                    background: "radial-gradient(circle, rgba(232,200,50,0.35) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(40px)",
                }}
            />

            {/* Hero content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* Eyebrow tag */}
                    <span className="inline-block mb-6 px-3 py-1 bg-[#e8c73226] text-amber-400 text-[10px] tracking-[0.22em] uppercase rounded-full">
                        Digital Agency
                    </span>

                    <h1
                        className="font-display font-thin text-black leading-[0.92] tracking-[-0.02em] mb-7"
                        style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                    >
                        We build digital<br />
                        <span className="relative inline-block">
                            that moves.
                        </span>
                    </h1>

                    <p
                        className="text-black/50 font-sans font-normal leading-[1.8] mb-10 max-w-md"
                        style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
                    >
                        Strategy, design, and technology for brands that refuse to stand still.
                        We make the web feel alive.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <Link
                            href="/contact"
                            className="text-[11px] font-bold tracking-[0.18em] uppercase px-7 py-3 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 font-sans"
                        >
                            Start a project
                        </Link>
                        <Link
                            href="/work"
                            className="text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3 border border-black/20 text-black/70 hover:border-black hover:text-black transition-all duration-300 font-sans"
                        >
                            See our work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
