import { Link, type LinkProps } from "@tanstack/react-router";
import clsx from "clsx";
import type React from "react";
import type { StyledReactProps } from "~/types";
import styles from "./UnstyledLink.module.css";

function UnstyledLink({
  children,
  className,
  to,
  ...delegated
}: LinkProps & StyledReactProps) {
  return (
    <Link className={clsx(className, styles.wrapper)} to={to} {...delegated}>
      {children}
    </Link>
  );
}

export default UnstyledLink;
