import React, { useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = ({ isEditable, rating, setRating, ...props }: RatingProps): JSX.Element => {
    
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((_, i: number) => {
            return (
                <StarIcon 
                    className={ cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}
                />
            );
        })

        setRatingArray(updatedArray);
    }

    return (
        <div { ...props }>
            { ratingArray.map((r, i) => (<span key={ i }>{ r }</span>)) }
        </div>
    );
};

export default Rating;