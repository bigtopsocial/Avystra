import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'whatsapp';
type Size = 'md' | 'lg';

const variantClass: Record<Variant, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    whatsapp: 'btn-whatsapp',
};

const sizeClass: Record<Size, string> = {
    md: 'btn-md',
    lg: 'btn-lg',
};

type CommonProps = {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
    fullWidth?: boolean;
};

type ButtonAsLink = CommonProps & { href: string };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

function classes({ variant = 'primary', size = 'lg', fullWidth, className = '' }: CommonProps) {
    return `btn ${sizeClass[size]} ${variantClass[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
}

type NormalizedProps = CommonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: string };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
    const { children, variant, size, className, fullWidth, ...rest } = props as NormalizedProps;
    const cls = classes({ children, variant, size, className, fullWidth });

    if (typeof rest.href === 'string' && rest.href) {
        const { href } = rest;
        return href.startsWith('/') ? (
            <Link href={href} className={cls}>
                {children}
            </Link>
        ) : (
            <a href={href} className={cls}>
                {children}
            </a>
        );
    }

    // `href` is not a valid <button> attribute — drop it before spreading.
    const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = { ...rest };
    delete (buttonProps as Record<string, unknown>).href;

    return (
        <button className={cls} {...buttonProps}>
            {children}
        </button>
    );
}
