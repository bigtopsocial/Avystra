'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

const journeySteps = [
    {
        year: "2013",
        title: "The Beginning",
        description: "Avystra started as a small training consultancy delivering communication and soft skills workshops to local businesses, with a focus on practical, applicable learning over theory.",
    },
    {
        year: "2016",
        title: "Expanding Into Leadership Development",
        description: "Demand from growing SMEs led us to design our first structured Leadership & Management Development programs, helping first-time managers build confidence and capability.",
    },
    {
        year: "2019",
        title: "Enterprise & Multi-Location Clients",
        description: "We began partnering with larger enterprises and multi-location organizations, developing hybrid and virtual delivery models to train distributed teams consistently.",
    },
    {
        year: "2022",
        title: "Technology & AI Training Practice",
        description: "Recognizing the pace of digital transformation, we launched dedicated programs in AI, data analytics, cloud computing, cybersecurity, and DevOps for technology and operations teams.",
    },
    {
        year: "2026",
        title: "A Trusted Learning Partner",
        description: "Today, Avystra has trained professionals across 250+ organizations spanning IT, BFSI, manufacturing, healthcare, retail, government, and education — with a continued focus on measurable, lasting impact.",
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
        <>
            {/* Hero */}
            <section className="bg-surface py-20 md:py-28">
                <Container className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="eyebrow mb-4"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.05 }}
                        className="heading-1 mx-auto max-w-3xl"
                    >
                        Our Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lead mx-auto mt-5 max-w-2xl"
                    >
                        From a small training consultancy to a trusted corporate learning partner for organizations across industries. This is how we built Avystra.
                    </motion.p>
                </Container>
            </section>

            {/* Timeline Section */}
            <section className="relative bg-white py-20 md:py-28">
                <div className="relative mx-auto max-w-3xl px-6 lg:px-8" ref={containerRef}>

                    {/* Animated SVG Line */}
                    <div className="absolute left-6 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-line-soft">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-ink origin-top"
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
                                            <circle cx="24" cy="24" r="23" className="stroke-line" strokeWidth="2" fill="white" />
                                            <motion.circle
                                                cx="24" cy="24" r="23"
                                                className="stroke-ink"
                                                strokeWidth="2"
                                                fill="transparent"
                                                variants={{
                                                    hidden: { pathLength: 0 },
                                                    visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut" } }
                                                }}
                                            />
                                            <motion.circle
                                                cx="24" cy="24" r="8"
                                                className="fill-ink"
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
                                            className="w-3 h-3 rounded-full bg-ink border-4 border-white box-content shadow-[0_0_0_2px_#f1f5f9]"
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
                                            <span className="mb-2 block text-3xl font-bold tracking-tight text-ink md:text-4xl">
                                                {step.year}
                                            </span>
                                            <h3 className="mb-3 text-xl font-bold text-ink">
                                                {step.title}
                                            </h3>
                                            <p className="text-[15px] leading-relaxed text-muted">
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
        </>
    );
}
