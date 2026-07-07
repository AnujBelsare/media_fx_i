"use client";

import { useEffect, useState } from "react";

/**
 * Renders a <video> at its own real aspect ratio instead of a
 * forced 16:9 box — critical for reel-format (portrait) clips,
 * which get almost entirely cropped away by object-cover inside
 * a landscape box.
 *
 * - Uses the poster image's ratio as an instant first guess (it's
 *   usually already cached from elsewhere on the page), then
 *   refines it once the video's own metadata loads — so there's
 *   no jarring resize once playback is possible.
 * - minRatio / maxRatio clamp extreme outliers; maxHeightVh stops
 *   a very tall portrait clip from dominating the whole viewport
 *   on desktop.
 * - preload="metadata" only fetches a small header chunk (enough
 *   to read dimensions/duration) — not the full video file, so
 *   this doesn't add real load until the visitor hits play.
 */
interface AspectVideoProps {
    src: string;
    poster?: string;
    minRatio?: number;
    maxRatio?: number;
    maxHeightVh?: number;
    className?: string;
}

export default function AspectVideo({
    src,
    poster,
    minRatio = 0.5,   // as tall as ~1:2 — comfortably covers 9:16 reels
    maxRatio = 1.8,    // as wide as typical landscape footage
    maxHeightVh = 80,
    className = "",
}: AspectVideoProps) {
    const [ratio, setRatio] = useState<number>(16 / 9);

    // Instant first guess from the poster, before the video itself loads
    useEffect(() => {
        if (!poster) return;
        const img = new window.Image();
        img.onload = () => {
            if (img.naturalWidth && img.naturalHeight) {
                const natural = img.naturalWidth / img.naturalHeight;
                setRatio(Math.min(maxRatio, Math.max(minRatio, natural)));
            }
        };
        img.src = poster;
    }, [poster, minRatio, maxRatio]);

    // Authoritative ratio once the video's real metadata is known
    const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const v = e.currentTarget;
        if (v.videoWidth && v.videoHeight) {
            const natural = v.videoWidth / v.videoHeight;
            setRatio(Math.min(maxRatio, Math.max(minRatio, natural)));
        }
    };

    return (
        <div className={`w-full flex justify-center bg-black ${className}`}>
            <video
                src={src}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                onLoadedMetadata={handleLoadedMetadata}
                style={{
                    aspectRatio: ratio,
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: `${maxHeightVh}vh`,
                    objectFit: "contain",
                }}
            />
        </div>
    );
}