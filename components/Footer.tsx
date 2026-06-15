'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const columns = [
    {
        heading: 'Programs',
        links: [
            { label: 'Leadership & Management', href: '/programs/leadership-management-development' },
            { label: 'Communication & Soft Skills', href: '/programs/communication-soft-skills-excellence' },
            { label: 'AI & Data Analytics', href: '/programs/ai-data-analytics-upskilling' },
            { label: 'Cloud, Cybersecurity & DevOps', href: '/programs/cloud-cybersecurity-devops' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'About Us', href: '/#about' },
            { label: 'Industries Served', href: '/#industries' },
            { label: 'Case Studies', href: '/#case-studies' },
            { label: 'Our Journey', href: '/about' },
        ],
    },
    {
        heading: 'Get in Touch',
        links: [
            { label: 'Request a Proposal', href: '/#contact' },
            { label: 'FAQ', href: '/#faq' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
        ],
    },
];

const socials = [
    {
        label: 'Facebook',
        href: '#',
        path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    },
    {
        label: 'Instagram',
        href: '#',
        path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
    },
    {
        label: 'LinkedIn',
        href: '#',
        path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
    },
    {
        label: 'YouTube',
        href: '#',
        path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.094 0 12 0 12s0 3.906.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.906 24 12 24 12s0-3.906-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-line bg-canvas">
            <Container className="py-16 md:py-20">
                {/* Top grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-4">
                        <Link href="/" className="inline-flex rounded-sm" aria-label="Avystra — home">
                            <Image
                                src="/images/Final%20logo.png"
                                alt="Avystra"
                                width={144}
                                height={90}
                                className="h-16 w-auto"
                            />
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                            A trusted corporate learning partner delivering customized training programs in leadership,
                            communication, sales, technology, and business strategy for organizations of every size.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
                        {columns.map((col) => (
                            <nav key={col.heading} aria-label={col.heading}>
                                <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink">{col.heading}</h4>
                                <ul className="space-y-3.5">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="rounded-sm text-sm text-muted transition-colors hover:text-ink"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-line pt-8 sm:flex-row">
                    <p className="text-sm text-muted">
                        © {new Date().getFullYear()} Avystra. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-line-soft text-body transition-colors hover:bg-ink hover:text-white"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d={social.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
