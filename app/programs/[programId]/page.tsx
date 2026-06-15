'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { trainingProgramsData } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';

export default function ProgramDetails() {
    const params = useParams();
    const programId = params?.programId as string;

    const program = trainingProgramsData.find((p) => p.id === programId);

    if (!program) {
        return (
            <main className="flex min-h-screen flex-col bg-white">
                <Navbar />
                <div className="flex flex-grow flex-col items-center justify-center gap-6 px-6 py-32 text-center">
                    <h1 className="heading-2 text-ink">Program not found</h1>
                    <p className="lead max-w-md">
                        The program you&apos;re looking for doesn&apos;t exist or may have been moved.
                    </p>
                    <Link href="/#programs" className="btn btn-lg btn-primary">
                        Browse all programs
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const company = formData.get('company');
        const phone = formData.get('phone');

        const message = `Hi, I am interested in a training proposal for: *${program.title}*.\n\nMy Details:\nName: ${name}\nCompany: ${company}\nPhone: ${phone}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '919876543210'; // Ensure standard international format without '+'

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const stats = [
        { label: 'Duration', value: program.duration },
        { label: 'Modules', value: program.modules },
        { label: 'Post-Training Support', value: program.support },
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-body">
            <Navbar />

            {/* Breadcrumb */}
            <Container className="pt-8">
                <nav className="flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
                    <Link href="/" className="rounded-sm transition-colors hover:text-ink">Home</Link>
                    <span aria-hidden="true">/</span>
                    <Link href="/#programs" className="rounded-sm transition-colors hover:text-ink">Programs</Link>
                    <span aria-hidden="true">/</span>
                    <span className="text-ink">{program.title}</span>
                </nav>
            </Container>

            {/* Hero */}
            <section className="border-b border-line py-16 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className={`mb-6 inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold tracking-wide ${program.levelColor}`}>
                                {program.category}
                            </span>
                            <h1 className="heading-1 mb-5">{program.title}</h1>
                            <p className="lead max-w-xl">{program.description}</p>

                            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-6">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col">
                                        <dt className="text-sm text-muted">{stat.label}</dt>
                                        <dd className="text-xl font-bold text-ink">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line shadow-soft"
                        >
                            <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Details & proposal form */}
            <section className="bg-surface py-20 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
                        {/* Overview */}
                        <div className="lg:col-span-3">
                            <h2 className="heading-2 mb-8">Program Overview</h2>
                            <div className="space-y-6 text-base leading-relaxed text-body md:text-[17px]">
                                {program.fullDescription.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>

                            <h3 className="heading-3 mb-6 mt-12 text-2xl">What Your Organization Can Expect</h3>
                            <ul className="space-y-4">
                                {program.outcomes.map((outcome) => (
                                    <li key={outcome} className="flex items-start gap-3 leading-relaxed text-body">
                                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-ink text-white">
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {outcome}
                                    </li>
                                ))}
                            </ul>

                            <div className="card mt-10 p-6">
                                <p className="eyebrow mb-2">Ideal For</p>
                                <p className="leading-relaxed text-body">{program.idealFor}</p>
                            </div>
                        </div>

                        {/* Proposal form */}
                        <div className="lg:col-span-2">
                            <div className="card sticky top-24 p-8 shadow-soft">
                                <div className="mb-8 border-b border-line pb-8">
                                    <p className="eyebrow mb-2">Delivery Format</p>
                                    <p className="text-2xl font-bold text-ink">{program.format}</p>
                                </div>

                                <h3 className="mb-6 text-xl font-bold text-ink">Request a proposal for this program</h3>

                                <form onSubmit={handleWhatsAppRedirect} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="field-label">Full Name</label>
                                        <input required type="text" id="name" name="name" autoComplete="name" className="field" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="field-label">Company Name</label>
                                        <input required type="text" id="company" name="company" autoComplete="organization" className="field" placeholder="Your organization" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="field-label">Phone Number</label>
                                        <input required type="tel" id="phone" name="phone" autoComplete="tel" className="field" placeholder="+91 98765 43210" />
                                    </div>

                                    <button type="submit" className="btn btn-lg btn-whatsapp w-full">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Request Proposal via WhatsApp
                                    </button>
                                    <p className="mt-2 text-center text-xs leading-relaxed text-muted">
                                        By clicking this button, you will be redirected to WhatsApp to discuss this program with our training consultants.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </main>
    );
}
