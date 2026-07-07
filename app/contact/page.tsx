"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
    "Video Editing & VFX",
    "Branding & Identity",
    "Digital Marketing",
    "Product Photography",
    "Web Design & Development",
    "Creative Direction",
    "Social Media Design",
    "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "", email: "", company: "", service: "", message: "",
    });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const update = (field: string, value: string) =>
        setForm((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Unknown error");
            setStatus("sent");
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-14">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">

                    {/* Page heading */}
                    <div className="mb-16 md:mb-20">
                        <p className="text-[#E8C832] text-[10px] font-bold tracking-[0.35em] uppercase mb-4 font-sans">
                            Get In Touch
                        </p>
                        <h1
                            className="font-display font-light text-black leading-[0.95] tracking-[-0.01em] max-w-2xl"
                            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
                        >
                            Let&apos;s build something<br />
                            <em>that moves.</em>
                        </h1>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 md:gap-24">

                        {/* Left — contact info */}
                        <div className="flex flex-col gap-10 pt-1">
                            <div>
                                <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-2">Email</p>
                                <a
                                    href="mailto:Mediafxi26@gmail.com"
                                    className="text-sm font-sans text-black hover:text-[#E8C832] transition-colors"
                                >
                                    Mediafxi26@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-2">Response time</p>
                                <p className="text-sm font-sans text-black/60">Within 24 hours</p>
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-2">Based in</p>
                                <p className="text-sm font-sans text-black/60">India</p>
                            </div>
                            <div className="pt-2 border-t border-black/8">
                                <p className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-sans mb-4 mt-8">Follow</p>
                                <a
                                    href="https://instagram.com/media_fx_i"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] tracking-[0.15em] uppercase font-sans text-black/40 hover:text-black transition-colors w-fit"
                                >
                                    Instagram ↗
                                </a>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div>
                            {status === "sent" ? (
                                <div className="flex flex-col items-start gap-6 py-8">
                                    <div className="w-10 h-10 bg-[#E8C832] flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3 9l4 4L15 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h2 className="font-display text-3xl font-light text-black">Message received.</h2>
                                    <p className="text-black/45 text-sm font-sans leading-relaxed max-w-sm">
                                        Thanks for reaching out. We&apos;ll review your project and get back within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setStatus("idle");
                                            setForm({ name: "", email: "", company: "", service: "", message: "" });
                                        }}
                                        className="mt-2 text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 bg-black text-white hover:bg-[#E8C832] hover:text-black transition-all duration-300 font-sans"
                                    >
                                        Send another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                                    {/* Name + Email */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <Field label="Name *" type="text" placeholder="Your name" value={form.name} onChange={(v) => update("name", v)} required />
                                        <Field label="Email *" type="email" placeholder="your@email.com" value={form.email} onChange={(v) => update("email", v)} required />
                                    </div>

                                    {/* Company */}
                                    <Field label="Company / Brand" type="text" placeholder="Optional" value={form.company} onChange={(v) => update("company", v)} />

                                    {/* Service */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] tracking-[0.22em] uppercase text-black/35 font-sans">Service</label>
                                        <select
                                            value={form.service}
                                            onChange={(e) => update("service", e.target.value)}
                                            className="w-full bg-transparent border-b border-black/15 py-3 text-sm font-sans text-black/60 focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a service…</option>
                                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] tracking-[0.22em] uppercase text-black/35 font-sans">Message *</label>
                                        <textarea
                                            placeholder="Tell us about your project, goals, and timeline…"
                                            value={form.message}
                                            onChange={(e) => update("message", e.target.value)}
                                            required
                                            rows={5}
                                            className="w-full bg-transparent border-b border-black/15 py-3 text-sm font-sans text-black/60 placeholder:text-black/20 focus:outline-none focus:border-black transition-colors resize-none"
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-red-500 text-xs font-sans -mt-4">{errorMsg}</p>
                                    )}

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="text-[11px] font-bold tracking-[0.22em] uppercase px-10 py-4 bg-[#E8C832] text-black hover:bg-black hover:text-[#E8C832] transition-all duration-300 font-sans disabled:opacity-50"
                                        >
                                            {status === "sending" ? "Sending…" : "Send Message →"}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function Field({ label, type, placeholder, value, onChange, required }: {
    label: string; type: string; placeholder: string;
    value: string; onChange: (v: string) => void; required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.22em] uppercase text-black/35 font-sans">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="w-full bg-transparent border-b border-black/15 py-3 text-sm font-sans text-black/70 placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
            />
        </div>
    );
}
