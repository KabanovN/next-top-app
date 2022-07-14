import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({
    isEditable = false,
    currentRating,
    setCurrentRating,
}: RatingProps): JSX.Element => {
    const [rating, setRating] = useState<JSX.Element[]>([...Array(5)]);

    useEffect(() => {
        updateRating(currentRating);
    }, [currentRating]);

    const updateRating = (ratingValue: number): void => {
        const ratingArray = rating.map((elem: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: ratingValue > i,
                        [styles.editable]: isEditable,
                    })}
                    onKeyDown={(evt: KeyboardEvent<SVGAElement>): void =>
                        changeRatingDisplayByKey(evt, i + 1)
                    }
                    tabIndex={isEditable ? 0 : -1}
                />
            );
        });
        setRating(ratingArray);
    };

    const changeRatingDisplay = (num: number): void => {
        if (!isEditable) return;
        updateRating(num);
    };

    const changeRatingDisplayByClick = (num: number): void => {
        if (!isEditable || !setCurrentRating) return;
        setCurrentRating(num);
    };

    const changeRatingDisplayByKey = (
        evt: KeyboardEvent<SVGAElement>,
        num: number
    ): void => {
        if (isEditable && setCurrentRating && evt.key === 'Enter') {
            setCurrentRating(num);
        }
    };

    return (
        <div>
            {rating.map((elem, i) => (
                <span
                    key={i}
                    onMouseEnter={(): void => changeRatingDisplay(i + 1)}
                    onMouseLeave={(): void =>
                        changeRatingDisplay(currentRating)
                    }
                    onClick={(): void => changeRatingDisplayByClick(i + 1)}>
                    {elem}
                </span>
            ))}
        </div>
    );
};
