import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color?: 'ghost' | 'primary' | 'red' | 'green' | 'gray';
    size?: 's' | 'm';
    href?: string;
}
