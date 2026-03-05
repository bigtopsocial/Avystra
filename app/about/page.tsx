'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const journeySteps = [
    {
        year: "2012",
        title: "The Beginning",
        description: "Nisshant Menddhe started his trading journey, navigating the complexities of the stock market. Through trial, error, and relentless study of market psychology, the foundational strategies were born.",
    },
    {
        year: "2016",
        title: "Developing the Blueprint",
        description: "After years of consistent profitability, Nisshant codified his methods into actionable frameworks. The focus shifted from merely trading to understanding the deep institutional footprint in the markets.",
    },
    {
        year: "2019",
        title: "The First Cohort",
        description: "What started as mentoring a few close friends turned into the first official training cohort. The results were astounding—ordinary individuals began reading the tape like seasoned professionals.",
    },
    {
        year: "2021",
        title: "Institute Foundation",
        description: "The Nisshant Menddhe Stock Market Trainings Institute was officially founded. The mission was clear: democratize high-level financial education and cut through the noise of 'get-rich-quick' schemes.",
    },
    {
        year: "2024",
        title: "Global Reach",
        description: "Today, we have empowered over 10,000+ students worldwide. Our community represents a new wave of disciplined, risk-averse, and highly profitable independent traders.",
    }
];

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the timeline container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Calculate the height of the SVG line based on scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero */}
            <section className="relative w-full bg-[#f6f7f9] py-24 md:py-32">
                <div className="max-w-[1080px] mx-auto px-6 md:px-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[40px] md:text-[56px] font-bold text-[#0F172A] leading-tight mb-6"
                    >
                        Our Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-[#8e95a5] leading-relaxed max-w-2xl mx-auto"
                    >
                        From a solitary trader navigating the markets to establishing an institute that empowers thousands globally. This is how we built wealth with confidence.
                    </motion.p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="max-w-[800px] mx-auto px-6 md:px-12 relative" ref={containerRef}>

                    {/* Animated SVG Line */}
                    <div className="absolute left-6 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gray-100">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-[#0F172A] origin-top"
                        />
                    </div>

                    <div className="space-y-24">
                        {journeySteps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">

                                    {/* Timeline Dot (SVG) */}
                                    <div className="absolute left-[-29px] md:left-1/2 md:-ml-[24px] top-0 md:top-1/2 md:-mt-[24px] z-10 hidden md:flex items-center justify-center">
                                        <motion.svg
                                            width="48" height="48" viewBox="0 0 48 48" fill="none"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-100px" }}
                                        >
                                            <circle cx="24" cy="24" r="23" className="stroke-gray-200" strokeWidth="2" fill="white" />
                                            <motion.circle
                                                cx="24" cy="24" r="23"
                                                className="stroke-[#0F172A]"
                                                strokeWidth="2"
                                                fill="transparent"
                                                variants={{
                                                    hidden: { pathLength: 0 },
                                                    visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut" } }
                                                }}
                                            />
                                            <motion.circle
                                                cx="24" cy="24" r="8"
                                                className="fill-[#0F172A]"
                                                variants={{
                                                    hidden: { scale: 0 },
                                                    visible: { scale: 1, transition: { duration: 0.5, delay: 0.5, ease: "backOut" } }
                                                }}
                                            />
                                        </motion.svg>
                                    </div>

                                    {/* Mobile Dot */}
                                    <div className="absolute left-[-5px] top-[6px] z-10 md:hidden flex items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.4, ease: "backOut" }}
                                            className="w-3 h-3 rounded-full bg-[#0F172A] border-4 border-white box-content shadow-[0_0_0_2px_#f1f5f9]"
                                        />
                                    </div>

                                    {/* Content Container (Left or Right) */}
                                    <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                            className="bg-white"
                                        >
                                            <span className="text-[#0F172A] font-bold text-[28px] md:text-[36px] tracking-tighter mb-2 block">
                                                {step.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#8e95a5] leading-relaxed text-[15px]">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
