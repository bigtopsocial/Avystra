'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  .grid-wrapper {
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-color: #f8fafc;
    overflow: hidden;
  }

  .grid-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
    background-size: 20px 30px;
    -webkit-mask-image: radial-gradient(
      ellipse 70% 60% at 50% 0%,
      #000 60%,
      transparent 100%
    );
    mask-image: radial-gradient(
      ellipse 70% 60% at 50% 0%,
      #000 60%,
      transparent 100%
    );
  }
  
  .content-wrapper {
      position: relative;
      z-index: 10;
  }
`;

export default function Hero() {
    return (
        <StyledWrapper>
            <section className="relative w-full overflow-hidden grid-wrapper">
                <div className="grid-background" />
                <div className="max-w-[1440px] mx-auto px-6 pt-10 pb-16 text-center content-wrapper">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[48px] md:text-[68px] font-bold text-[#0F172A] leading-[1.05] tracking-tight"
                    >
                        Join Best Stock Market <br /> Training Institute in Nagpur
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="mt-20 w-full relative max-w-2xl mx-auto"
                    >
                        {/* Outer container to simulate the subtle background shadow/blur if any, and maintain aspect ratio */}
                        <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden drop-shadow-2xl border border-gray-200">
                            <Image
                                src="/images/hero1.png"
                                alt="Setup"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="px-8 py-3.5 bg-black text-white text-[15px] font-medium rounded-full hover:bg-green-500 transition-all ease-in active:scale-95">
                            Know More
                        </button>
                    </motion.div>


                </div>
            </section>
        </StyledWrapper>
    );
}
