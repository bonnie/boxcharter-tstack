import clsx from "clsx";
import type { StyledReactProps } from "../../types";
import Icon from "../Icon";
import styles from "./Spinner.module.css";

export default function Spinner({ className, ...delegated }: StyledReactProps) {
  return (
    <div {...delegated} className={clsx(styles.wrapper, className)}>
      {/* @ts-ignore: 'Icon' cannot be used as a JSX component. */}
      <Icon className={styles.spinner} iconName="loader" />
    </div>
  );
}
