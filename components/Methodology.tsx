'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
    {
        step: '01',
        title: 'Consultation',
        description: "We start with a conversation about your business goals, workforce challenges, and the outcomes you want training to deliver.",
    },
    {
        step: '02',
        title: 'Training Needs Analysis',
        description: 'We assess skill gaps across roles and teams to identify exactly where training will have the greatest business impact.',
    },
    {
        step: '03',
        title: 'Curriculum Design',
        description: 'Programs are designed around your industry, workforce skill level, and objectives — never a generic, off-the-shelf template.',
    },
    {
        step: '04',
        title: 'Delivery',
        description: 'Training is delivered through instructor-led workshops, virtual sessions, hybrid models, on-site programs, or self-paced learning.',
    },
    {
        step: '05',
        title: 'Assessment & Certification',
        description: 'Participants are evaluated against defined learning outcomes, with certification on successful completion.',
    },
    {
        step: '06',
        title: 'Continuous Learning Support',
        description: 'Post-training coaching, refreshers, and resources help teams apply new skills and sustain long-term improvement.',
    },
];

export default function Methodology() {
    return (
        <Section id="methodology" className="relative isolate overflow-hidden bg-surface">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }}
            />

            <SectionHeading
                eyebrow="How We Work"
                title={
                    <>
                        A clear, <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">consultative process</span>
                    </>
                }
                subtitle="An end-to-end methodology that keeps every training engagement grounded in your business reality and measured against real outcomes."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((item, index) => (
                    <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
                        className="card card-hover flex flex-col gap-4 p-8"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-base font-bold text-accent-strong">
                            {item.step}
                        </span>
                        <h3 className="heading-3 text-ink">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted md:text-[15px]">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
