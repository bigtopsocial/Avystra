'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';

const points = [
    {
        title: 'Built around your business',
        detail: 'Every program starts with a training needs analysis — never an off-the-shelf template.',
    },
    {
        title: 'Practitioner-led training',
        detail: 'Sessions delivered by trainers with real corporate and industry experience.',
    },
    {
        title: 'Flexible delivery',
        detail: 'Instructor-led, virtual, hybrid, on-site, or self-paced — whatever fits your teams.',
    },
    {
        title: 'Measurable, lasting impact',
        detail: 'Outcomes tracked against agreed KPIs, with post-training support to sustain them.',
    },
];

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
};

export default function About() {
    return (
        <Section id="about" className="relative isolate overflow-hidden bg-canvas">
            {/* faint ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[520px] w-[520px] rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(180,134,47,0.08), transparent 70%)' }}
            />

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Left content */}
                <div className="flex flex-col">
                    <motion.p {...reveal} transition={{ duration: 0.6, ease: 'easeOut' }} className="eyebrow mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        About Avystra
                    </motion.p>

                    <motion.h2
                        {...reveal}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                        className="heading-2"
                    >
                        A trusted partner in corporate learning <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">&amp; workforce development</span>
                    </motion.h2>

                    <motion.p
                        {...reveal}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="lead mt-6"
                    >
                        Avystra designs and delivers customized corporate training for startups, SMEs, enterprises,
                        multinationals, government bodies, and institutions — working closely with HR and L&amp;D teams
                        to understand real business challenges before designing a single slide.
                    </motion.p>

                    {/* Value points */}
                    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-10 sm:grid-cols-2">
                        {points.map((point, index) => (
                            <motion.div
                                key={point.title}
                                {...reveal}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + index * 0.08 }}
                                className="flex gap-3"
                            >
                                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div>
                                    <h3 className="text-[15px] font-semibold text-ink">{point.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-muted">{point.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right image — transparent cutout on a clean soft panel */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]"
                >
                    {/* soft rounded panel */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-[2rem] border border-line bg-gradient-to-b from-accent-soft/70 via-surface to-surface"
                    />
                    {/* subtle dotted accent */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-6 right-5 hidden h-20 w-20 opacity-60 sm:block"
                        style={{
                            backgroundImage: 'radial-gradient(rgba(180,134,47,0.4) 1.4px, transparent 1.4px)',
                            backgroundSize: '14px 14px',
                        }}
                    />

                    {/* portrait */}
                    <div className="relative aspect-[3/4] w-full">
                        <Image
                            src="/images/client.png"
                            alt="Avystra corporate training expert"
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 400px, 460px"
                            className="object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.14)]"
                        />
                    </div>

                    {/* floating credential badge */}
                    <div className="absolute bottom-5 left-0 hidden rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md sm:block">
                        <div className="text-lg font-bold leading-none text-ink">12+ yrs</div>
                        <div className="mt-1 text-xs text-muted">Avg. trainer experience</div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
