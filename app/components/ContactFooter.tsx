import Link from 'next/link'
import React from 'react'

function ContactFooter() {
    return (
        <section className='w-full min-h-[60vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-28 bg-white'>
            <div className='flex flex-col items-center text-center w-full max-w-5xl mx-auto gap-6 sm:gap-8'>

                {/* Heading */}
                <h2
                    className="font-display font-thin text-black leading-[1.05] tracking-[-0.02em]"
                    style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
                >
                    The Right Content Attracts<br className='hidden sm:block' />
                    {' '}The Right Attention.
                </h2>

                {/* Subtext */}
                <p
                    className="text-black/40 font-sans font-normal leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', letterSpacing: '0.03em' }}
                >
                    Let's Create Something Meaningful Together &nbsp;From Strategy And Design To Content
                    And Digital Experiences That Leave A Lasting Impact.
                </p>

                {/* CTA Button */}
                <div className='pt-2 sm:pt-4'>
                    <Link
                        href='/'
                        className="
                            inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.2em]
                            uppercase px-10 sm:px-14 py-4 sm:py-5 bg-[#D4B84A] text-black
                            hover:bg-black hover:text-[#D4B84A] transition-all duration-300 font-sans
                        "
                    >
                        Let's Connect
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default ContactFooter