'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="w-full bg-[#f6f7f9] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-tight mb-6"
                        >
                            Meet Your <span className="text-slate-800 block">Mentor <br /> Nishant Mendhe</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            className="space-y-6 text-[15px] md:text-[17px] text-[#8e95a5] leading-relaxed font-normal text-justify"
                        >
                            <p>
                                Nishant Mendhe Stock Market Training Institute, located in Nagpur, India, specializes in comprehensive stock market training designed for traders at every skill level. Offering engaging share market classes, our institute equips participants with vital trading strategies and insights necessary for success in the financial markets.
                            </p>
                            <p>
                                Our expert-led courses include specialized swing trading classes and broader stock market training, emphasizing practical knowledge and real-time trading experience. Join us for top-notch trading classes in Nagpur, and elevate your trading skills today. With a focus on hands-on learning, we prepare you to navigate the stock market with confidence and acumen. Advance your trading career with us!
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <motion.hr
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className="my-3 border-t border-gray-200 origin-left"
                        />

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                            >
                                <div className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-1 leading-none tracking-tight">10</div>
                                <div className="text-[11px] font-semibold text-[#8e95a5] tracking-widest uppercase mb-1">Years</div>
                                <div className="text-[13px] font-medium text-gray-400">Stock Market Experience</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                            >
                                <div className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-1 leading-none tracking-tight">70K+</div>
                                <div className="text-[11px] font-semibold text-[#8e95a5] tracking-widest uppercase mb-1">Students</div>
                                <div className="text-[13px] font-medium text-gray-400">Satisfied Customers</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden drop-shadow-2xl"
                    >
                        <Image
                            src="/images/about1.png"
                            alt="Stock Market Training Institute in Nagpur"
                            fill
                            className="object-cover object-bottom"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
