import { Html } from '@elysiajs/html';

type CardProps = {
    title?: string;
    children: any;
    className?: string;
};

export const Card = ({ title, children, className = '' }: CardProps) => {
    return (
        <div class={`card ${className}`}>
            {title && <h2 class="text-xl font-semibold mb-4">{title}</h2>}
            {children}
        </div>
    );
};