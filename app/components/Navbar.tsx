"use client";

import Link from "next/link";
import { useState } from "react";
import DecodedText from "./DecodedText";

const navLinks = ["HOME", "SERVICES", "WORK", "ABOUT US"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full font-sans bg-white border-b border-black/8 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">

                {/* Logo */}
                <div className="text-black text-[14px] font-bold tracking-[0.2em] uppercase">
                    <Link href="/">MEDIA_FX_I</Link>
                </div>

                {/* Desktop nav links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <Link
                                href="/"
                                className="text-black/60 hover:text-black transition-colors duration-200 text-[14px] font-medium tracking-[0.18em] uppercase"
                            >
                                <DecodedText text={item} />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link
                    href="/"
                    className="hidden md:inline-block text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-2 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 border border-transparent"
                >
                    CONNECT
                </Link>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 focus:outline-none"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
                        /* X icon */
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2" y1="2" x2="20" y2="20" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                            <line x1="20" y1="2" x2="2" y2="20" stroke="black" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                    ) : (
                        /* Hamburger icon */
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="1" x2="22" y2="1" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="0" y1="8" x2="22" y2="8" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="0" y1="15" x2="22" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu drawer */}
            {menuOpen && (
                <div className="md:hidden h-screen bg-white border-t border-black/8 px-6 py-6 flex flex-col gap-5">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-black/70 hover:text-black text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/"
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
