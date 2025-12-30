import clsx from "clsx";
import logo from "~/images/boxcharter-logo.svg";
import type { StyledReactProps } from "~/types";
import styles from "./Logo.module.css";

export const BOXCHARTER_LOGO_ALT_TEXT =
  "the letters B, O, and X in horizontal, abutting squares, with the word 'charter' below";

function Logo({ className, style }: StyledReactProps) {
  return (
    <img
      className={clsx(styles.wrapper, className)}
      style={style}
      src={logo}
      alt={BOXCHARTER_LOGO_ALT_TEXT}
    />
  );
}

export default Logo;
