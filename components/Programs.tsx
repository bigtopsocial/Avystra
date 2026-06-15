'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { trainingProgramsData } from '@/lib/data';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Programs() {
    return (
        <Section id="programs" className="relative isolate overflow-hidden bg-surface">
            {/* ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }}
            />

            <SectionHeading
                eyebrow="Training Programs"
                title={
                    <>
                        Programs built for <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">measurable outcomes</span>
                    </>
                }
                subtitle="Customized employee upskilling and leadership development across management, communication, sales, technology, and business strategy — tailored to your workforce and delivered in the format that fits your organization."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {trainingProgramsData.map((program, index) => (
                    <motion.div
                        key={program.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
                        className="card card-hover flex flex-col overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                            <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-grow flex-col p-7">
                            <span
                                className={`mb-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${program.levelColor}`}
                            >
                                {program.category}
                            </span>

                            <h3 className="heading-3 mb-3 text-ink">{program.title}</h3>

                            <p className="mb-8 flex-grow text-sm leading-relaxed text-muted">{program.description}</p>

                            <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
                                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                                    {program.duration}
                                </span>
                                <Link
                                    href={`/programs/${program.id}`}
                                    className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-ink transition-colors hover:text-body"
                                    aria-label={`View ${program.title}`}
                                >
                                    View Program
                                    <svg
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
