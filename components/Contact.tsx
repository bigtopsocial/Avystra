'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
};

const details = [
    { label: 'Email', value: 'hello@avystra.com' },
    { label: 'Phone', value: '+91 98765 43210' },
    { label: 'Office', value: 'Nagpur, Maharashtra, India' },
];

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const company = formData.get('company');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const need = formData.get('need');

        const message = `Hi, I would like to request a corporate training proposal.\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nTraining Requirement: ${need}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '919876543210'; // Replace with actual business number

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden bg-surface py-20 md:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }}
            />
            <Container>
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* CTA copy */}
                    <div className="flex flex-col lg:sticky lg:top-28">
                        <motion.p {...reveal} transition={{ duration: 0.6, ease: 'easeOut' }} className="eyebrow mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Get Started
                        </motion.p>
                        <motion.h2 {...reveal} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }} className="heading-2">
                            Let&apos;s build a training plan <span className="bg-gradient-to-r from-accent-strong to-accent bg-clip-text text-transparent">for your team</span>
                        </motion.h2>
                        <motion.p {...reveal} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="lead mt-5 max-w-lg">
                            Tell us about your team and goals, and we&apos;ll respond with a tailored proposal —
                            recommended programs, delivery format, and timelines. No obligation, just a conversation
                            about your workforce development needs.
                        </motion.p>

                        <motion.dl
                            {...reveal}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                            className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1"
                        >
                            {details.map((item) => (
                                <div key={item.label}>
                                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                                        {item.label}
                                    </dt>
                                    <dd className="mt-1 text-[15px] font-medium text-ink">{item.value}</dd>
                                </div>
                            ))}
                        </motion.dl>
                    </div>

                    {/* Form card */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="card p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:p-10"
                    >
                        <h3 className="mb-6 text-xl font-bold text-ink">Request a training proposal</h3>

                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="field-label">Full Name</label>
                                <input type="text" id="name" name="name" required autoComplete="name" className="field" placeholder="Your name" />
                            </div>

                            <div>
                                <label htmlFor="company" className="field-label">Company Name</label>
                                <input type="text" id="company" name="company" required autoComplete="organization" className="field" placeholder="Your organization" />
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="field-label">Work Email</label>
                                    <input type="email" id="email" name="email" required autoComplete="email" className="field" placeholder="you@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="field-label">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" required autoComplete="tel" className="field" placeholder="+91" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="need" className="field-label">Training Requirement</label>
                                <textarea
                                    id="need"
                                    name="need"
                                    required
                                    rows={4}
                                    className="field-area resize-none"
                                    placeholder="Tell us about your team size, training goals, and preferred delivery format"
                                />
                            </div>

                            <Button type="submit" fullWidth size="lg" className="mt-1">
                                Submit request
                            </Button>
                            <p className="text-center text-xs text-muted">
                                We typically respond within one business day.
                            </p>
                        </div>
                    </motion.form>
                </div>
            </Container>
        </section>
    );
}
