'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const caseStudies = [
    {
        tag: 'Manufacturing · Leadership Development',
        title: 'Building a Front-Line Leadership Pipeline',
        result: 'Reduced floor-level escalations by 38% within two quarters after training 60 shift supervisors in conflict resolution and performance management.',
    },
    {
        tag: 'IT Services · AI & Data Analytics',
        title: 'Accelerating AI Adoption Across Teams',
        result: 'Trained 180 employees across departments on applied AI tools, cutting manual reporting time by over 50% within three months.',
    },
    {
        tag: 'BFSI · Sales & Customer Service',
        title: 'Improving Customer Retention Through Training',
        result: "A regional bank's relationship managers improved customer satisfaction scores by 22% after a five-week consultative selling program.",
    },
];

const testimonials = [
    {
        quote: "The training needs analysis stage made all the difference. The program wasn't generic — it addressed the exact gaps our managers had, and we saw the change in how they led their teams within weeks.",
        name: 'HR Director',
        company: 'Mid-Size IT Services Company',
    },
    {
        quote: "We've worked with training vendors before, but the post-training coaching and follow-up is what set this apart. Our team actually applied what they learned.",
        name: 'Head of Learning & Development',
        company: 'Manufacturing Enterprise',
    },
    {
        quote: 'The trainers understood our industry from day one. The case studies used in the sessions felt like they were pulled straight from our own business.',
        name: 'Operations Manager',
        company: 'Retail Chain',
    },
];

const reveal = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
};

export default function Testimonials() {
    return (
        <Section id="case-studies" className="relative isolate overflow-hidden bg-surface">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[600px] w-[600px] translate-x-1/3 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)' }}
            />

            <SectionHeading
                eyebrow="Proven Results"
                title={
                    <>
                        Outcomes our clients <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">can measure</span>
                    </>
                }
                subtitle="A sample of how our training programs have translated into measurable improvements for client organizations."
            />

            {/* Case studies */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={study.title}
                        {...reveal}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                        className="card card-hover flex flex-col gap-4 p-8"
                    >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
                            {study.tag}
                        </span>
                        <h3 className="heading-3 text-ink">{study.title}</h3>
                        <p className="text-sm leading-relaxed text-muted md:text-[15px]">{study.result}</p>
                    </motion.div>
                ))}
            </div>

            {/* Testimonials */}
            <div className="mt-20 md:mt-24">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mb-12 text-center text-2xl font-bold tracking-tight text-ink md:text-3xl"
                >
                    What Our <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">Clients Say</span>
                </motion.h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.figure
                            key={testimonial.name}
                            {...reveal}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                            className="card card-hover flex flex-col gap-5 p-8"
                        >
                            <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.05 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.353 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-[15px] leading-relaxed text-body">
                                {testimonial.quote}
                            </blockquote>
                            <figcaption className="mt-auto">
                                <div className="text-sm font-bold text-ink">{testimonial.name}</div>
                                <div className="text-sm text-muted">{testimonial.company}</div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </Section>
    );
}
