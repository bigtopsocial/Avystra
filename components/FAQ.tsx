'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What are the prerequisites for joining your stock market training programs?",
        answer: "There are no specific prerequisites for our beginner courses; anyone with a desire to learn about the stock market can join. Basic knowledge of finance is helpful but not mandatory."
    },
    {
        question: "What if I have questions or need support during the course?",
        answer: "Yes! During our live interactive sessions, you can ask questions directly to instructors. We also provide access to a dedicated support team and community forums for ongoing assistance"
    },
    {
        question: "Is prior trading experience required to enroll?",
        answer: "No prior experience is necessary! Our courses are designed to accommodate beginners, providing foundational knowledge before advancing to more complex trading strategies."
    },
    {
        question: "Can I learn at my own pace?",
        answer: "Absolutely! Our courses offer flexible learning options, including recorded sessions and materials that you can access anytime, allowing you to study at your convenience."
    },
    {
        question: "Are there any prerequisites for the advanced courses?",
        answer: "Yes, we recommend completing our foundational courses or having equivalent trading experience to ensure you fully benefit from our advanced strategies and techniques."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full bg-white py-24 md:py-32">
            <div className="max-w-[800px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-tight"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                className="border-b border-gray-100 last:border-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                                >
                                    <span className="text-[17px] md:text-[18px] font-medium text-[#0F172A] pr-8">
                                        {faq.question}
                                    </span>

                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#0F172A]' : 'bg-gray-50 border border-gray-200 group-hover:bg-gray-100'}`}>
                                        {isOpen ? (
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-[15px] text-[#8e95a5] leading-relaxed pr-8">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
