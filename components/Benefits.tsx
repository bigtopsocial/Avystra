'use client';

import { motion } from 'framer-motion';

const benefits = [
    {
        title: "Low-risk Trading Plan",
        description: "Develop strategies focused on capital preservation and minimizing downside risk before prioritizing profits.",
        linkText: "Learn More",
        href: "#",
        delay: 0
    },
    {
        title: "Perfect Entry Timing",
        description: "Master the art of entering trades at optimal price points using advanced technical analysis and order flow.",
        linkText: "Learn More",
        href: "#",
        delay: 0.1
    },
    {
        title: "Risk Management",
        description: "Implement strict position sizing and stop-loss protocols to ensure long-term consistency in the markets.",
        linkText: "Learn More",
        href: "#",
        delay: 0.2
    },
    {
        title: "Emotional Discipline",
        description: "Cultivate the psychological resilience needed to execute your trading plan without hesitation or fear.",
        linkText: "Learn More",
        href: "#",
        delay: 0.3
    },
    {
        title: "Expert Guidance",
        description: "Learn directly from Nisshant Menddhe, gaining insights from real-time market analysis and years of experience.",
        linkText: "Learn More",
        href: "#",
        delay: 0.4
    }
];

export default function Benefits() {
    return (
        <section id="benefits" className="w-full bg-[#f6f7f9] py-24 md:py-32">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-tight mb-6"
                    >
                        Benefits <span className="text-slate-800 block">We Offer</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="text-[16px] md:text-[18px] text-[#8e95a5] leading-relaxed font-normal text-justify"
                    >
                        We provide an immersive trading floor environment that features both advanced online classes and in-person training in small groups. Under the expert guidance of Nisshant Mendhe, students gain hands-on experience in trading strategies, risk management, and market analysis, along with 6 months of access to a professional trading setup. If you are seeking practical experience in an authentic trading environment, our institute may be the ideal choice for you.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: benefit.delay }}
                            className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col gap-6 items-start shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300"
                        >
                            {/* Icon Placeholder */}
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-800 flex-shrink-0 flex items-center justify-center font-bold text-xl">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-3 leading-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-[14px] md:text-[15px] text-[#8e95a5] leading-relaxed mb-6">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
