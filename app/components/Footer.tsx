"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const companyLinks = [
    { label: "Home",     href: "/" },
    { label: "Services", href: "/#services", scrollTo: "services" },
    { label: "Work",     href: "/work" },
    { label: "About Us", href: "/about" },
    { label: "Contact",  href: "/contact" },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/mediafxi" },
];

export default function Footer() {
    const router   = useRouter();
    const pathname = usePathname();

    const handleSectionLink = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, scrollTo: string) => {
            e.preventDefault();
            const scrollToEl = () => {
                const el = document.getElementById(scrollTo);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            };
            if (pathname === "/") {
                scrollToEl();
            } else {
                router.push("/");
                setTimeout(scrollToEl, 120);
            }
        },
        [pathname, router]
    );

    return (
        <footer className="w-full bg-[#E8C832] relative overflow-hidden">

            {/* Top */}
            <div className="w-full px-6 sm:px-10 lg:px-16 pt-12 pb-6 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0">

                {/* Left: Tagline */}
                <div className="lg:w-2/5 shrink-0">
                    <h2
                        className="font-display font-thin text-black leading-[1.05] tracking-[-0.01em]"
                        style={{ fontSize: "clamp(1.2rem, 2.4vw, 2.3rem)" }}
                    >
                        Let&apos;s Build Something<br />
                        That Matters
                    </h2>
                </div>

                {/* Right: Nav columns */}
                <div className="flex flex-row gap-10 sm:gap-16 lg:gap-20 flex-wrap lg:flex-1 lg:justify-end">

                    {/* Services — each scrolls to its own row */}
                    <div className="flex flex-col gap-1">
                        <span className="font-sans font-black text-black/80 text-[11px] tracking-[0.18em] uppercase mb-1">
                            Services
                        </span>
                        {["Strategy", "Design", "Development"].map((item) => (
                            <a
                                key={item}
                                href={`/#${item}`}
                                onClick={(e) => handleSectionLink(e, item)}
                                className="group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black cursor-pointer"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1">
                        <span className="font-sans font-black text-black/80 text-[11px] tracking-[0.18em] uppercase mb-1">
                            Company
                        </span>
                        {companyLinks.map((item) =>
                            item.scrollTo ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleSectionLink(e, item.scrollTo!)}
                                    className="group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black cursor-pointer"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                                </a>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                                </Link>
                            )
                        )}
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-1">
                        <span className="font-sans font-black text-black/80 text-[11px] tracking-[0.18em] uppercase mb-1">
                            Connect
                        </span>
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="w-full flex flex-col-reverse md:flex-row md:items-end justify-between px-6 sm:px-10 lg:px-16 pt-12 pb-6">
                <div
                    className="font-display font-semibold text-[#00000022] select-none pointer-events-none leading-none whitespace-nowrap"
                    style={{ fontSize: "clamp(3rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
                    aria-hidden="true"
                >
                    Media_Fx_I
                </div>
                <p className="font-sans text-[#111111a3] font-semibold text-[11px] tracking-wider mb-4 md:mb-0">
                    ©2026 Media_Fx_I. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
