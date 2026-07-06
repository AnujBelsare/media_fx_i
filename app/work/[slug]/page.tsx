import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import projects from "../../data/Project";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.href.replace("/work/", "") }));
}

export default async function WorkDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.href === `/work/${slug}`);
    if (!project) notFound();

    const others = projects.filter((p) => p.href !== project.href).slice(0, 2);
    const allImages = [project.image, ...(project.gallery ?? [])];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-14">

                {/* ── Hero ── */}
                <div className="w-full bg-[#f5f5f3] pt-16 pb-0">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 mb-8">
                            <Link href="/work" className="text-[10px] tracking-[0.25em] uppercase text-black/30 hover:text-black font-sans transition-colors">
                                Work
                            </Link>
                            <span className="text-black/20 text-[10px]">/</span>
                            <span className="text-[10px] tracking-[0.25em] uppercase text-black/50 font-sans">{project.title}</span>
                        </div>

                        {/* Title + meta row */}
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
                            <div>
                                <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.35em] uppercase mb-3 font-sans">
                                    {project.number} — {project.category}
                                </p>
                                <h1
                                    className="font-display font-light text-black leading-[0.95] tracking-[-0.01em]"
                                    style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
                                >
                                    {project.title}
                                </h1>
                            </div>
                            <div className="flex flex-wrap gap-2 md:max-w-xs">
                                {project.services.map((s) => (
                                    <span key={s} className="text-[9px] tracking-[0.18em] uppercase font-sans text-black/40 border border-black/15 px-3 py-1.5">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cover image — full width, natural height */}
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                        <div className="relative w-full overflow-hidden bg-[#eee]" style={{ aspectRatio: "16/9" }}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                priority
                                quality={90}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Description + sidebar ── */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 grid md:grid-cols-[1.8fr_1fr] gap-12 md:gap-20 border-b border-black/8">
                    <div>
                        <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-5">About the project</p>
                        <p className="text-black/65 text-base font-sans leading-[1.9]">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Stat label="Category" value={project.category} />
                        <Stat label="Services delivered" value={project.services.join(" · ")} />
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase px-7 py-3.5 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 font-sans"
                            >
                                Start a similar project →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Gallery images ── */}
                {allImages.length > 1 && (
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
                        <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-10">Project Gallery</p>

                        {/* 2-col masonry-style grid */}
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            {allImages.slice(1).map((src, i) => (
                                <div
                                    key={i}
                                    className="relative overflow-hidden bg-[#f5f5f3]"
                                    style={{ aspectRatio: i % 3 === 0 ? "4/3" : i % 3 === 1 ? "3/4" : "1/1" }}
                                >
                                    <Image
                                        src={src}
                                        alt={`${project.title} — image ${i + 2}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading="lazy"
                                        quality={80}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Video ── */}
                {project.video && (
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-16 md:pb-20">
                        <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-6">Project Film</p>
                        <video
                            src={project.video}
                            poster={project.image}
                            controls
                            playsInline
                            className="w-full aspect-video object-cover bg-black"
                            preload="metadata"
                        />
                    </div>
                )}

                {/* ── More work ── */}
                {others.length > 0 && (
                    <div className="bg-[#f5f5f3] py-16 md:py-20">
                        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                            <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-10">More Projects</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {others.map((p) => (
                                    <Link key={p.number} href={p.href} className="group block">
                                        <div className="relative overflow-hidden bg-[#eee]" style={{ aspectRatio: "4/3" }}>
                                            <Image
                                                src={p.image}
                                                alt={p.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                loading="lazy"
                                                quality={75}
                                            />
                                        </div>
                                        <div className="mt-4 flex items-start justify-between">
                                            <div>
                                                <h3 className="font-sans text-black text-sm font-medium tracking-[0.05em] uppercase">{p.title}</h3>
                                                <p className="font-sans text-black/40 text-[11px] tracking-[0.12em] uppercase mt-1">{p.category}</p>
                                            </div>
                                            <span className="font-mono text-black/25 text-[10px] mt-0.5">{p.number}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-2">{label}</p>
            <p className="text-black/70 text-sm font-sans leading-relaxed">{value}</p>
        </div>
    );
}
