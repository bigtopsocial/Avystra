'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const faqs = [
    {
        question: 'How do you customize training programs for our organization?',
        answer: "Every engagement begins with a consultation and training needs analysis to understand your industry, workforce skill levels, and business objectives. Based on this, we design a curriculum tailored to your goals — we don't deliver generic, off-the-shelf content.",
    },
    {
        question: 'What training delivery formats do you offer?',
        answer: "We offer instructor-led workshops, live virtual sessions, hybrid learning models, on-site corporate training, and self-paced programs. The format is chosen based on your team's size, location, and schedule.",
    },
    {
        question: 'Can you deliver training across multiple office locations or countries?',
        answer: 'Yes. Our virtual and hybrid delivery models are designed to support multi-location and multinational teams, with content adapted for different regions and workforce groups where required.',
    },
    {
        question: 'How do you measure the impact of training?',
        answer: 'We agree on success metrics during the training needs analysis stage — such as productivity, engagement, sales performance, or process efficiency — and assess progress through pre- and post-training evaluations and follow-up reviews.',
    },
    {
        question: 'Do participants receive certification on completion?',
        answer: 'Yes, participants who meet the assessment criteria receive a certificate of completion, which can be used for internal records, performance reviews, or professional development portfolios.',
    },
    {
        question: 'What kind of support is available after the training ends?',
        answer: "We provide post-training coaching, refresher sessions, and access to supporting resources to help employees apply what they've learned and ensure the skills translate into lasting workplace performance.",
    },
    {
        question: 'Do you work with small businesses as well as large enterprises?',
        answer: 'Absolutely. We design programs for startups and SMEs as well as large enterprises, multinational corporations, government organizations, and educational institutions — scaled to fit your team size and budget.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" size="narrow" className="relative isolate overflow-hidden bg-canvas">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(180,134,47,0.05), transparent 70%)' }}
            />
            <SectionHeading 
                eyebrow="FAQ" 
                title={
                    <>
                        Frequently asked <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">questions</span>
                    </>
                } 
            />

            <div className="flex flex-col">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    const panelId = `faq-panel-${index}`;
                    const buttonId = `faq-button-${index}`;

                    return (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                            className="border-b border-line/50 last:border-0"
                        >
                            <h3>
                                <button
                                    id={buttonId}
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                                >
                                    <span className="text-base font-medium text-ink md:text-[17px]">{faq.question}</span>
                                    <span
                                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                                            isOpen ? 'bg-ink text-white shadow-md' : 'border border-line/50 bg-surface/50 text-muted group-hover:bg-white group-hover:shadow-sm group-hover:border-white/60'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                            </h3>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
