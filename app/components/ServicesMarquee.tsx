"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

const services = [
    "VFX",
    "VIDEO EDITING",
    "CREATIVE DIRECTION",
    "BRANDING",
    "UI/UX",
    "DIGITAL EXPERIENCES",
    "E-COMMERCE",
    "HEADLESS CMS",
];

function MarqueeTrack({ speed = 65 }: { speed?: number }) {
    const baseX = useMotionValue(0);
    const trackRef = useRef<HTMLDivElement>(null);
    // Cache half-width so we never read the DOM inside the animation loop
    const halfWidthRef = useRef<number>(0);

    useEffect(() => {
        if (trackRef.current) {
            halfWidthRef.current = trackRef.current.scrollWidth / 2;
        }
    }, []);

    useAnimationFrame((_, delta) => {
        const next = baseX.get() - (speed * delta) / 1000;
        // Reset using cached value — no DOM read
        baseX.set(halfWidthRef.current > 0 && Math.abs(next) >= halfWidthRef.current ? 0 : next);
    });

    const x = useTransform(baseX, (v) => `${v}px`);

    const copy = services.map((service, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-black">
                {service}
            </span>
            <span className="mx-5 text-black/40 text-xs">✦</span>
        </span>
    ));

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex whitespace-nowrap will-change-transform"
            >
                <span className="inline-flex">{copy}</span>
                <span className="inline-flex">{copy}</span>
            </motion.div>
        </div>
    );
}

export default function ServicesMarquee() {
    return (
        <div className="w-full bg-[#E8C832] py-4 border-y border-black/10 select-none">
            <MarqueeTrack speed={65} />
        </div>
    );
}
