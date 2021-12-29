import React, { useEffect, useState, KeyboardEvent, Fragment, } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = ({ 
    isEditable = false,
    rating, 
    setRating, 
    ...props 
}: RatingProps): JSX.Element => {
    
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }

        constructRating(i);
    };

    const handleOnClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }

        setRating(i);
    };

    const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
        if (event.code.toLowerCase() !== "space" || !setRating) {
            return;
        }

        setRating(i);
    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((_, i: number) => {
            return (
                <StarIcon 
                    className={ 
                        cn(styles.star, {
                            [styles.filled]: i < currentRating,
                            [styles.editable]: isEditable,
                        })
                    }
                    onMouseEnter={ () => changeDisplay(i + 1) }
                    onClick={ () => handleOnClick(i + 1) }
                    tabIndex={ isEditable ? 1 : -1 }
                    onKeyDown={ (event: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, event)}
                />
            );
        });

        setRatingArray(updatedArray);
    };

    return (
        <div
            onMouseLeave={ () => changeDisplay(rating) } 
            { ...props }
        >
            { ratingArray.map((starIcon: JSX.Element, i: number) => (<Fragment key={ i }>{ starIcon }</Fragment>)) }
        </div>
    );
};

export default Rating;