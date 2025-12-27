import clsx from "clsx";
import type React from "react";

import styles from "./UnstyledButton.module.css";

function UnstyledButton({
  children,
  className,
  type = "button",
  ...delegated
}: React.ComponentPropsWithRef<"button">) {
  return (
    <button
      className={clsx(className, styles.button)}
      type={type}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default UnstyledButton;
