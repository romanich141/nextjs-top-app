import React from "react";
import { PProps } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css"

const P = ({ children, size = "md", className = "", ...props }: PProps): JSX.Element => {
    return (
        <p 
            className={
                cn(styles.p, className, {
                    [styles.sm]: size === "sm",
                    [styles.md]: size === "md",
                    [styles.lg]: size === "lg",
                })
            }
            { ...props }
        >
            { children }
        </p>
    );
}

export default P;