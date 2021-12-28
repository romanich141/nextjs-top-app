import cn from "classnames";
import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

const Htag = ({ size = "md", color = "ghost", className = "", href, children, ...props }: TagProps): JSX.Element => {
    return (
        <div 
            className={
                cn(styles.tag, className, {
                    [styles.sm]: size === "sm",
                    [styles.md]: size === "md",

                    [styles.ghost]: color === "ghost",
                    [styles.red]: color === "red",
                    [styles.green]: color === "green",
                    [styles.grey]: color === "grey",
                    [styles.primary]: color === "primary",
                })
            }
            color={ color }
            { ...props }
        >
            { 
                href 
                    ? <a href={ href }>{ children }</a>
                    :<>{ children }</> 
            }
        </div>
    );
};

export default Htag;