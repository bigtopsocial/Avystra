'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const industries = [
    {
        title: 'IT & Technology',
        description: 'Upskilling engineering, product, and support teams in AI, cloud, cybersecurity, and DevOps practices.',
    },
    {
        title: 'Banking, Financial Services & Insurance',
        description: 'Compliance-aware soft skills, leadership, and customer service training for client-facing and back-office teams.',
    },
    {
        title: 'Manufacturing & Engineering',
        description: 'Frontline leadership, process discipline, and communication training for plant and operations teams.',
    },
    {
        title: 'Healthcare & Pharmaceuticals',
        description: 'Communication, patient experience, and management training for clinical and administrative staff.',
    },
    {
        title: 'Retail & E-Commerce',
        description: 'Sales, customer service, and team leadership programs built around frontline and store operations.',
    },
    {
        title: 'Government & Public Sector',
        description: 'Structured workforce development and management training aligned with public service delivery goals.',
    },
    {
        title: 'Education & Academic Institutions',
        description: 'Faculty development, administrative training, and technology adoption programs for institutions.',
    },
    {
        title: 'Startups & SMEs',
        description: 'Lean, high-impact training that builds management capability and core business skills as you scale.',
    },
];

export default function Industries() {
    return (
        <Section id="industries" className="relative isolate overflow-hidden bg-canvas">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-64 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(180,134,47,0.06), transparent 70%)' }}
            />

            <SectionHeading
                eyebrow="Industries Served"
                title={
                    <>
                        Tailored to your <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">sector</span>
                    </>
                }
                subtitle="Every industry has its own challenges, workflows, and workforce expectations. Our programs are adapted to your sector so learning translates directly into on-the-job performance."
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {industries.map((industry, index) => (
                    <motion.div
                        key={industry.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 4) * 0.08 }}
                        className="card card-hover flex flex-col gap-3 p-7"
                    >
                        <span className="mb-1 h-1.5 w-8 rounded-full bg-accent" />
                        <h3 className="text-base font-bold leading-snug text-ink">{industry.title}</h3>
                        <p className="text-sm leading-relaxed text-muted">{industry.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
