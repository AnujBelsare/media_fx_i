import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='w-full bg-[#D4B84A] relative overflow-hidden'>

            {/* Top Section */}
            <div className='w-full px-6 sm:px-10 lg:px-16 pt-12 pb-6 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0'>

                {/* Left: Tagline */}
                <div className='lg:w-2/5 shrink-0'>
                    <h2
                        className='font-display font-thin text-black leading-[1.05] tracking-[-0.01em]'
                        style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2.3rem)' }}
                    >
                        Let's Build Something<br />
                        That Matters
                    </h2>
                </div>

                {/* Right: Nav Columns */}
                <div className='flex flex-row gap-10 sm:gap-16 lg:gap-20 flex-wrap lg:flex-1 lg:justify-end'>

                    {/* Services */}
                    <div className='flex flex-col gap-1'>
                        <span className='font-sans font-black text-black/80 text-[11px] tracking-[0.18em] uppercase mb-1'>
                            Services
                        </span>
                        {['Strategy', 'Design', 'Development'].map((item) => (
                            <Link
                                key={item}
                                href='/'
                                className='group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black'
                            >
                                {item}

                                <span className='absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full'></span>
                            </Link>
                        ))}
                    </div>

                    {/* Company */}
                    <div className='flex flex-col gap-1'>
                        <span className='font-sans font-black text-black/80 text-[11px] tracking-[0.18em] uppercase mb-1'>
                            Company
                        </span>
                        {['Home', 'Services', 'Work', 'About Us'].map((item) => (
                            <Link
                                key={item}
                                href='/'
                                className='group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black'
                            >
                                {item}

                                <span className='absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full'></span>
                            </Link>
                        ))}
                    </div>

                    {/* Connect */}
                    <div className='flex flex-col gap-1'>
                        <span className='font-sans font-black text-black/80 text-[11px] tracking-[0.18em] uppercase mb-1'>
                            Connect
                        </span>
                        {['Twitter / X', 'Instagram', 'LinkedIn'].map((item) => (
                            <Link
                                key={item}
                                href='/'
                                className='group relative w-fit font-sans font-semibold text-black/55 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-black'
                            >
                                {item}

                                <span className='absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full'></span>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

            {/* Watermark + Copyright Row */}
            <div className='w-full flex flex-col-reverse md:flex-row md:items-end justify-between
            px-6 sm:px-10 lg:px-16 pt-12
            '>
                {/* Large Watermark Text */}
                <div
                    className='font-display font-semibold text-[#00000022] select-none pointer-events-none leading-none whitespace-nowrap'
                    style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-0.02em' }}
                    aria-hidden='true'
                >
                    Media_Fx_I
                </div>

                {/* Copyright — bottom right */}
                <div>
                    <p className='font-sans text-[#111111a3] font-semibold text-[11px] tracking-wider'>
                        ©2026 Media_Fx_I. All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer