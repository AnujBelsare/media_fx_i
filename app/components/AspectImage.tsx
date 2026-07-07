"use client";

import { useState } from "react";
import Image from "next/image";

interface AspectImageProps {
    src: string;
    alt: string;
    sizes: string;
    quality?: number;
    priority?: boolean;
    lazy?: boolean;
    minRatio?: number;
    maxRatio?: number;
    fallbackRatio?: number;
    bg?: string;
    className?: string;
    imageClassName?: string;
}

export default function AspectImage({
    src,
    alt,
    sizes,
    quality = 85,
    priority = false,
    lazy = true,
    minRatio = 0.62,
    maxRatio = 1.65,
    fallbackRatio = 1,
    bg = "#f5f5f3",
    className = "",
    imageClassName = "",
}: AspectImageProps) {
    const [ratio, setRatio] = useState<number | null>(null);
    const [contain, setContain] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        if (img.naturalWidth && img.naturalHeight) {
            const natural = img.naturalWidth / img.naturalHeight;
            const bounded = Math.min(maxRatio, Math.max(minRatio, natural));
            setContain(Math.abs(bounded - natural) > 0.01);
            setRatio(bounded);
        }
        setLoaded(true);
    };

    return (
        <div
            className={`relative w-full overflow-hidden ${className}`}
            style={{
                aspectRatio: ratio ?? fallbackRatio,
                backgroundColor: bg,
                transition: "aspect-ratio 0.4s ease",
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                quality={quality}
                priority={priority}
                loading={priority ? undefined : lazy ? "lazy" : "eager"}
                className={`${contain ? "object-contain" : "object-cover"} transition-all duration-700 ease-out ${imageClassName}`}
                style={{ opacity: loaded ? 1 : 0 }}
                onLoad={handleLoad}
            />
            {!loaded && (
                <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: bg }} />
            )}
        </div>
    );
}