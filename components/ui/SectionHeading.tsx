'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
    eyebrow?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    align?: 'center' | 'left';
    /** Render heading as h1 instead of the default h2. */
    as?: 'h1' | 'h2';
    className?: string;
};

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
};

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    as = 'h2',
    className = '',
}: SectionHeadingProps) {
    const isCenter = align === 'center';
    const Heading = as;

    return (
        <div
            className={`mb-14 md:mb-16 ${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}
        >
            {eyebrow && (
                <motion.p {...reveal} transition={{ duration: 0.6, ease: 'easeOut' }} className="eyebrow mb-4">
                    {eyebrow}
                </motion.p>
            )}
            <motion.div {...reveal} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}>
                <Heading className={as === 'h1' ? 'heading-1' : 'heading-2'}>{title}</Heading>
            </motion.div>
            {subtitle && (
                <motion.p
                    {...reveal}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
                    className={`lead mt-5 ${isCenter ? 'mx-auto' : ''}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
