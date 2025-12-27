import clsx from "clsx";
import type React from "react";

import Spinner from "../Spinner";
import UnstyledButton from "../UnstyledButton";
import styles from "./Button.module.css";

type Variant = "normal" | "danger";

type ButtonProps = {
  outline?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  variant?: Variant;
} & React.ComponentPropsWithRef<"button">;

export default function Button({
  children,
  outline = false,
  isLoading = false,
  loadingText = "",
  variant = "normal",
  className,
  ...delegated
}: ButtonProps) {
  return (
    <UnstyledButton
      className={clsx(
        className,
        styles.wrapper,
        styles[outline ? "outline" : "solid"],
        styles[variant],
      )}
      {...delegated}
    >
      {isLoading ? (
        <div className={styles.loading}>
          <Spinner />
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </UnstyledButton>
  );
}
