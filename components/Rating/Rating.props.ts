import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    currentRating: number;
    setCurrentRating?: (rating: number) => void;
}
