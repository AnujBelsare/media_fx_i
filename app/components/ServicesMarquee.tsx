"use client";

import { useRef } from "react";
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

function MarqueeTrack({ speed = 60 }: { speed?: number }) {
    const baseX = useMotionValue(0);
    const trackRef = useRef<HTMLDivElement>(null);

    useAnimationFrame((_, delta) => {
        // delta is ms since last frame — move at `speed` px/s
        baseX.set(baseX.get() - (speed * delta) / 1000);

        if (trackRef.current) {
            const halfWidth = trackRef.current.scrollWidth / 2;
            // Reset when we've scrolled one full copy width
            if (Math.abs(baseX.get()) >= halfWidth) {
                baseX.set(0);
            }
        }
    });

    const x = useTransform(baseX, (v) => `${v}px`);

    // Build one "copy" of the list
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
                {/* Two identical copies — second one picks up seamlessly */}
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
