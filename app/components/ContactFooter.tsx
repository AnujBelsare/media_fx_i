import Link from "next/link";

export default function ContactFooter() {
    return (
        <section className="w-full min-h-[60vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-28 bg-white">
            <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto gap-6 sm:gap-8">

                <h2
                    className="font-display font-thin text-black leading-[1.05] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
                >
                    The Right Content Attracts<br className="hidden sm:block" />
                    {" "}The Right Attention.
                </h2>

                <p
                    className="text-black/40 font-sans font-normal leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", letterSpacing: "0.03em" }}
                >
                    Let&apos;s Create Something Meaningful Together From Strategy And Design To Content
                    And Digital Experiences That Leave A Lasting Impact.
                </p>

                <div className="pt-2 sm:pt-4">
                    <Link
                        href="/contact"
                        className="inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase px-10 sm:px-14 py-4 sm:py-5 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 font-sans"
                    >
                        Let&apos;s Connect
                    </Link>
                </div>
            </div>
        </section>
    );
}
