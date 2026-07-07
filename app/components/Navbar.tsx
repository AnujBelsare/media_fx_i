"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import DecodedText from "./DecodedText";

interface NavItem {
    label: string;
    href: string;
    /** If set, scroll to this element id on the homepage */
    scrollTo?: string;
}

const navLinks: NavItem[] = [
    { label: "HOME",     href: "/" },
    { label: "SERVICES", href: "/#services", scrollTo: "services" },
    { label: "WORK",     href: "/work" },
    { label: "ABOUT US", href: "/about" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router   = useRouter();
    const pathname = usePathname();

    /**
     * If the link targets a section on the home page:
     * - already on "/" → just smooth-scroll to the element
     * - on another page → navigate to "/" then scroll after a brief tick
     *   (the section will be rendered by the time the tick fires because
     *    Next.js SPA navigations are synchronous in the client)
     */
    const handleSectionLink = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, scrollTo: string) => {
            e.preventDefault();
            setMenuOpen(false);

            const scrollToEl = () => {
                const el = document.getElementById(scrollTo);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            };

            if (pathname === "/") {
                scrollToEl();
            } else {
                router.push("/");
                // Give the page a moment to mount before scrolling
                setTimeout(scrollToEl, 120);
            }
        },
        [pathname, router]
    );

    return (
        <nav className="w-full font-sans bg-white/80 backdrop-blur-[8px] border-b border-black/8 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">

                {/* Logo */}
                <div className="text-black text-[14px] font-bold tracking-[0.2em] uppercase">
                    <Link href="/">MEDIA_FX_I</Link>
                </div>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            {item.scrollTo ? (
                                <a
                                    href={item.href}
                                    onClick={(e) => handleSectionLink(e, item.scrollTo!)}
                                    className="text-black/60 hover:text-black transition-colors duration-200 text-[14px] font-medium tracking-[0.18em] uppercase cursor-pointer"
                                >
                                    <DecodedText text={item.label} />
                                </a>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-black/60 hover:text-black transition-colors duration-200 text-[14px] font-medium tracking-[0.18em] uppercase"
                                >
                                    <DecodedText text={item.label} />
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className="hidden md:inline-block text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-2 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300"
                >
                    CONNECT
                </Link>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <line x1="2" y1="2" x2="20" y2="20" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                            <line x1="20" y1="2" x2="2" y2="20" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                            <line x1="0" y1="1" x2="22" y2="1" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="0" y1="8" x2="22" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="0" y1="15" x2="22" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className="md:hidden h-screen overflow-y-auto bg-white border-t border-black/8 px-6 py-6 flex flex-col gap-5">
                    {navLinks.map((item) =>
                        item.scrollTo ? (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleSectionLink(e, item.scrollTo!)}
                                className="text-black/70 hover:text-black text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-black/70 hover:text-black text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 text-center text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-3 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300"
                    >
                        CONNECT
                    </Link>
                </div>
            )}
        </nav>
    );
}
