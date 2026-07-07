import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MediaFXI is a creative agency built for brands that want to move people. We combine strategy, design, and production — from product shoots to full brand identities.",
  alternates: { canonical: "https://www.mediafxi.in/about" },
  openGraph: {
    url: "https://www.mediafxi.in/about",
    title: "About MediaFXI",
    description:
      "Creative agency combining strategy, design, and production for brands that want to stand out.",
  },
};

const values = [
    {
        number: "01",
        title: "Story-first thinking",
        body: "Every brand has a story worth telling. We lead with narrative before we think about format, medium, or platform.",
    },
    {
        number: "02",
        title: "Craft over quantity",
        body: "We take on fewer projects so we can go deeper on each one. Quality is non-negotiable.",
    },
    {
        number: "03",
        title: "Results that matter",
        body: "Beautiful work that doesn't perform is just decoration. We design for attention, emotion, and action.",
    },
];

const services = [
    "Video Editing & VFX",
    "Branding & Identity",
    "Product Photography",
    "Social Media Design",
    "Digital Marketing",
    "Web Design & Development",
    "Creative Direction",
    "Motion Graphics",
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-14">

                {/* ── Hero ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-16 md:pb-20 border-b border-black/8">
                    <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.35em] uppercase mb-5 font-sans">
                        About Us
                    </p>
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-end">
                        <h1
                            className="font-display font-light text-black leading-[0.95] tracking-[-0.02em]"
                            style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
                        >
                            We make brands<br />
                            <em>impossible to ignore.</em>
                        </h1>
                        <p className="text-black/50 font-sans text-sm leading-[1.9] md:pb-2">
                            MediaFXI is a creative agency built for brands that want to move people.
                            We combine strategy, design, and production to create content that
                            connects from a single product shoot to a full brand identity.
                        </p>
                    </div>
                </div>

                {/* ── What we do ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 border-b border-black/8">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
                        <div>
                            <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans">What we do</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {services.map((s) => (
                                <span
                                    key={s}
                                    className="text-[11px] tracking-[0.15em] uppercase font-sans text-black/60 border border-black/12 px-4 py-2"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Values ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 border-b border-black/8">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-12">How we work</p>
                    <div className="grid md:grid-cols-3 gap-10 md:gap-8">
                        {values.map((v) => (
                            <div key={v.number}>
                                <span className="block font-mono text-[#E8C832] text-[11px] mb-4">{v.number}.</span>
                                <h3 className="font-display font-light text-black text-xl md:text-2xl leading-tight mb-3">
                                    {v.title}
                                </h3>
                                <p className="text-black/45 text-sm font-sans leading-[1.8]">{v.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Connect ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 border-b border-black/8">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
                        <div>
                            <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans">Get in touch</p>
                        </div>
                        <div className="flex flex-col gap-8">

                            {/* Email */}
                            <div>
                                <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 font-sans mb-2">Email</p>
                                <a
                                    href="mailto:Mediafxi26@gmail.com"
                                    className="text-sm font-sans text-black hover:text-[#E8C832] transition-colors"
                                >
                                    Mediafxi26@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div>
                                <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 font-sans mb-2">Phone</p>
                                <a
                                    href="tel:+919422369541"
                                    className="text-sm font-sans text-black hover:text-[#E8C832] transition-colors"
                                >
                                    +91 94223 69541
                                </a>
                            </div>

                            {/* Instagram */}
                            <div>
                                <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 font-sans mb-2">Instagram</p>
                                <a
                                    href="https://www.instagram.com/media_fx_i"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-sans text-black hover:text-[#E8C832] transition-colors"
                                >
                                    @mediafxi ↗
                                </a>
                            </div>

                            {/* Location */}
                            <div>
                                <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 font-sans mb-2">Based in</p>
                                <p className="text-sm font-sans text-black/60">India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── CTA strip ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <h2
                        className="font-display font-light text-black leading-[1.05] tracking-[-0.01em]"
                        style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
                    >
                        Ready to start a project?
                    </h2>
                    <Link
                        href="/contact"
                        className="shrink-0 text-[11px] font-bold tracking-[0.22em] uppercase px-8 py-4 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 font-sans"
                    >
                        Let&apos;s Talk →
                    </Link>
                </div>

            </main>
            <Footer />
        </>
    );
}
