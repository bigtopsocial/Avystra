'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const benefits = [
    {
        title: 'Industry-Relevant Curriculum',
        description: 'Every program is built around current industry practices and mapped to the skills your teams need to perform better, faster.',
    },
    {
        title: 'Experienced Trainers',
        description: 'Sessions are led by practitioners with real corporate and industry experience, not just classroom theory.',
    },
    {
        title: 'Customized for Your Organization',
        description: 'No off-the-shelf templates. Every program is shaped around your industry, workforce level, and business objectives.',
    },
    {
        title: 'Flexible Delivery Models',
        description: 'Choose instructor-led workshops, virtual sessions, hybrid learning, on-site training, or self-paced programs.',
    },
    {
        title: 'Measurable Business Outcomes',
        description: 'Training success is tracked against agreed KPIs — from productivity and engagement to performance and retention.',
    },
    {
        title: 'Post-Training Support',
        description: "Coaching, refresher sessions, and resources help employees apply what they've learned long after the program ends.",
    },
];

export default function Benefits() {
    return (
        <Section id="why-us" className="relative isolate overflow-hidden bg-canvas">
            {/* ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(180,134,47,0.06), transparent 70%)' }}
            />
            <SectionHeading
                eyebrow="Why Choose Us"
                title={
                    <>
                        A training partner, <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">not just a vendor</span>
                    </>
                }
                subtitle="We approach corporate training as a long-term partnership, not a one-off event. From the first consultation to post-training follow-up, our focus stays on closing skill gaps, improving performance, and delivering a measurable return on your training investment."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
                        className="card card-hover flex flex-col items-start gap-5 p-8"
                    >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-base font-bold text-accent-strong">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div>
                            <h3 className="heading-3 mb-2 text-ink">{benefit.title}</h3>
                            <p className="text-sm leading-relaxed text-muted md:text-[15px]">{benefit.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
