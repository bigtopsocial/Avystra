'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

const ArrowRight = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
    </svg>
);

const stats = [
    {
        value: '13+',
        label: 'Years Experience',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        ),
    },
    {
        value: '10K+',
        label: 'Professionals Trained',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-1.5a3.5 3.5 0 00-3-3.46M9 20H4v-1.5a3.5 3.5 0 013-3.46m9-3.04a3.5 3.5 0 10-3.5-3.5 3.5 3.5 0 003.5 3.5zm-6 0a3 3 0 100-6 3 3 0 000 6z" />
        ),
    },
    {
        value: '250+',
        label: 'Organizations Served',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 21V6a1 1 0 011-1h9a1 1 0 011 1v15M15 21h4a1 1 0 001-1v-9a1 1 0 00-1-1h-4M8 9h3M8 13h3M8 17h3" />
        ),
    },
];

function AvatarStack() {
    return (
        <div className="flex -space-x-2.5">
            {[0, 1, 2].map((i) => (
                <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 ring-2 ring-canvas">
                    <svg className="h-4 w-4 text-muted" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6z" />
                    </svg>
                </span>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative isolate flex flex-col justify-center overflow-hidden bg-canvas lg:min-h-[calc(100dvh-6rem)]">
            {/* faint ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(180,134,47,0.10), transparent 70%)' }}
            />

            <Container className="relative z-10">
                <div className="grid items-center gap-10 py-10 sm:py-14 md:py-16 lg:grid-cols-2 lg:gap-10 lg:py-20">
                    {/* ----------------------------- LEFT ----------------------------- */}
                    <div className="flex flex-col lg:col-start-1 lg:row-start-1">
                        <motion.span
                            {...fade}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line/50 bg-surface/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-strong backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            Corporate Training &amp; Upskilling
                        </motion.span>

                        <motion.h1
                            {...fade}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.06 }}
                            className="mt-5 font-bold tracking-tight text-ink sm:mt-6"
                            style={{ fontSize: 'clamp(2rem, 7vw, 4rem)', lineHeight: 1.08 }}
                        >
                            Training that drives <span className="block bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">real business results</span>
                        </motion.h1>

                        <motion.p
                            {...fade}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
                            className="lead mt-6 max-w-xl text-body"
                        >
                            Customized leadership, communication, sales, and technology programs built around your
                            organization&apos;s goals — delivered by experienced trainers, in person or online, with
                            measurable outcomes.
                        </motion.p>

                        <motion.div
                            {...fade}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
                            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
                        >
                            <Button href="#contact" size="lg" className="w-full shadow-lg shadow-ink/5 sm:w-auto">
                                Request a Proposal <ArrowRight />
                            </Button>
                            <Button href="#programs" variant="secondary" size="lg" className="w-full bg-white/50 backdrop-blur-sm hover:bg-white sm:w-auto">
                                Explore Programs <ArrowRight />
                            </Button>
                        </motion.div>

                        <motion.div
                            {...fade}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
                            className="mt-8 hidden items-center gap-4 border-l-2 border-accent-soft pl-4 sm:flex"
                        >
                            <AvatarStack />
                            <p className="max-w-xs text-sm leading-snug text-muted">
                                Trusted by HR &amp; L&amp;D teams across IT, BFSI, Manufacturing &amp; Healthcare.
                            </p>
                        </motion.div>
                    </div>

                    {/* ----------------------------- RIGHT ----------------------------- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
                        className="relative mx-auto mt-10 w-full max-w-[520px] sm:mt-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:max-w-none"
                    >
                        {/* elegant arch background */}
                        <div className="absolute inset-x-8 bottom-0 top-12 -z-10 rounded-t-full border border-white/60 bg-gradient-to-b from-accent-soft/80 to-surface/30 shadow-[0_8px_32px_rgba(0,0,0,0.04)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" />

                        {/* dotted texture top-left */}
                        <div
                            aria-hidden="true"
                            className="absolute left-2 top-16 hidden h-28 w-28 opacity-60 sm:block"
                            style={{
                                backgroundImage: 'radial-gradient(rgba(180,134,47,0.4) 1.5px, transparent 1.5px)',
                                backgroundSize: '16px 16px',
                            }}
                        />

                        {/* orbit ring */}
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 400 460"
                            className="absolute inset-0 hidden h-full w-full sm:block"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <ellipse cx="200" cy="300" rx="180" ry="150" stroke="var(--color-accent)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4" />
                        </svg>

                        {/* portrait */}
                        <div className="relative z-[1] mx-auto aspect-[3/4] w-full max-w-[440px]">
                            <Image
                                src="/images/client.png"
                                alt="Professional corporate trainer"
                                fill
                                sizes="(max-width: 1024px) 90vw, 440px"
                                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] scale-[1.22] origin-bottom [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                                priority
                            />
                        </div>

                        {/* floating: business impact card */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                            className="absolute right-0 top-24 z-10 hidden w-48 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl sm:block"
                        >
                            <div className="flex items-center gap-2">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />
                                    </svg>
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Impact</span>
                            </div>
                            <div className="mt-3 text-4xl font-bold tracking-tight text-ink">98%</div>
                            <div className="mt-1 text-sm font-medium text-muted">Client Satisfaction</div>
                        </motion.div>

                        {/* floating: person badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'backOut', delay: 0.6 }}
                            className="absolute bottom-32 left-4 z-10 hidden h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/80 text-ink shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md sm:flex"
                        >
                            <svg className="h-7 w-7 text-accent-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM6 21v-1a6 6 0 0112 0v1" />
                            </svg>
                        </motion.div>

                        {/* floating: target badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'backOut', delay: 0.7 }}
                            className="absolute bottom-12 right-10 z-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/80 text-accent-strong shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md sm:flex"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <circle cx="12" cy="12" r="8" strokeWidth={1.8} />
                                <circle cx="12" cy="12" r="4" strokeWidth={1.8} />
                                <circle cx="12" cy="12" r="1" strokeWidth={1.8} />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Stats card — sits under the copy on desktop, after the portrait on mobile */}
                    <motion.dl
                        {...fade}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                        className="grid grid-cols-3 divide-x divide-line/50 lg:col-start-1 lg:row-start-2"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-2 px-3 first:pl-0 sm:gap-2.5 sm:px-6">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent-strong sm:h-10 sm:w-10 sm:rounded-xl">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        {stat.icon}
                                    </svg>
                                </span>
                                <div>
                                    <dd className="text-xl font-bold tracking-tight text-ink sm:text-3xl">{stat.value}</dd>
                                    <dt className="mt-1 text-xs font-medium text-muted sm:text-sm">{stat.label}</dt>
                                </div>
                            </div>
                        ))}
                    </motion.dl>
                </div>
            </Container>
        </section>
    );
}
