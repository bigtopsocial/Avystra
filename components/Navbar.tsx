'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Industries', href: '/industries' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
                scrolled || open
                    ? 'border-line bg-white/90 backdrop-blur-md'
                    : 'border-transparent bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-[1560px] items-center justify-between px-6 lg:h-24 lg:px-10">
                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center rounded-sm"
                    aria-label="Avystra — home"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/images/Final%20logo.png"
                        alt="Avystra"
                        width={144}
                        height={90}
                        priority
                        className="h-[60px] w-auto md:h-[72px]"
                    />
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-body transition-colors hover:text-ink"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Button href="/#contact" size="md">
                        Request a Proposal
                    </Button>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink transition-colors hover:bg-surface lg:hidden"
                >
                    {open ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-line bg-white lg:hidden"
                    >
                        <div className="mx-auto flex max-w-[1560px] flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl px-3 py-3 text-base font-medium text-body transition-colors hover:bg-surface hover:text-ink"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button href="/#contact" size="lg" fullWidth className="mt-3">
                                Request a Proposal
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
