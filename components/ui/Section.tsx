import { ReactNode } from 'react';
import Container from './Container';

type SectionProps = {
    id?: string;
    children: ReactNode;
    /** Extra classes for the <section> (e.g. background colour). */
    className?: string;
    /** Constrain the inner container width. */
    size?: 'default' | 'narrow' | 'wide';
    /** Render without the inner Container (for custom layouts). */
    bare?: boolean;
};

export default function Section({ id, children, className = '', size = 'default', bare = false }: SectionProps) {
    return (
        <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
            {bare ? children : <Container size={size}>{children}</Container>}
        </section>
    );
}
