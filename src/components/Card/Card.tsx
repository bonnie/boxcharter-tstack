import clsx from "clsx";
import type { StyledReactChildrenProps } from "~/types";
import styles from "./Card.module.css";

function Card({ children, className, style }: StyledReactChildrenProps) {
  return (
    <div className={clsx(styles.wrapper, className)} style={style}>
      {children}
    </div>
  );
}

export default Card;
