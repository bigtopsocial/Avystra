'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-16 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[48px] md:text-[68px] font-bold text-[#0F172A] leading-[1.05] tracking-tight"
                >
                    Best Stock Market Training Institute<br />
                    in Nagpur
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="mt-6 text-lg md:text-[20px] text-gray-500 leading-relaxed max-w-3xl mx-auto font-normal"
                >
                    New Online Stock Market Classes Begin on December 19, 2025. Unlock investment strategies and secure your financial future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="px-8 py-3.5 bg-[#0F172A] text-white text-[15px] font-medium rounded-full hover:bg-gray-800 transition-all active:scale-95">
                        Know More
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="mt-20 w-full relative max-w-2xl mx-auto"
                >
                    {/* Outer container to simulate the subtle background shadow/blur if any, and maintain aspect ratio */}
                    <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden drop-shadow-2xl">
                        <Image
                            src="/images/1.png"
                            alt="Best Stock Market Training Institute in Nagpur"
                            fill
                            className="object-contain object-center"
                            priority
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
