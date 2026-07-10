import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center selection:bg-brand selection:text-background">
            {/* Subtle Background Accent */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

            {/* Main Content Container */}
            <div className="max-w-2xl space-y-8">

                {/* Large Editorial Stat/Number */}
                <p className="font-display text-[10rem] font-normal leading-none tracking-tighter sm:text-[14rem] text-[#E8C832] select-none">
                    404
                </p>

                {/* Messaging using your typography stack */}
                <div className="space-y-3">
                    <h1 className="font-tight text-2xl font-medium tracking-tight sm:text-3xl text-foreground">
                        This scene was left on the cutting room floor.
                    </h1>
                    <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-foreground/60 sm:text-base">
                        The page you are looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get your digital narrative back on track.
                    </p>
                </div>

                {/* Premium Action Elements */}
                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                    <Link
                        href="/contact"
                        className="text-[11px] font-bold tracking-[0.18em] uppercase px-7 py-3 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 font-sans"
                    >
                        Return to Home
                    </Link>

                    <Link
                        href="/projects"
                        className="text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3 border border-black/20 text-black/70 hover:border-black hover:text-black transition-all duration-300 font-sans"
                    >
                        Explore Projects
                    </Link>
                </div>
            </div>

            {/* Minimalist Bottom Branding / Coordinates */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-tight">
                © {new Date().getFullYear()} Media_FX_I — Refusing to Stand Still.
            </div>
        </main>
    );
}