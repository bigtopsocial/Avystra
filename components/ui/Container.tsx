import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    className?: string;
    /** Narrower max width for reading-focused content (e.g. FAQ). */
    size?: 'default' | 'narrow' | 'wide';
};

const widths: Record<NonNullable<ContainerProps['size']>, string> = {
    narrow: 'max-w-3xl',
    default: 'max-w-[1560px]',
    wide: 'max-w-[1720px]',
};

export default function Container({ children, className = '', size = 'default' }: ContainerProps) {
    return (
        <div className={`mx-auto w-full ${widths[size]} px-6 lg:px-10 ${className}`}>
            {children}
        </div>
    );
}
