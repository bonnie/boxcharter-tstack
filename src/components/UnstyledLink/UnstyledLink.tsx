import clsx from "clsx";
import type React from "react";

import styles from "./UnstyledLink.module.css";

function UnstyledLink({
  children,
  className,
  ...delegated
}: React.ComponentPropsWithRef<"a">) {
  return (
    <a className={clsx(className, styles.wrapper)} {...delegated}>
      {children}
    </a>
  );
}

export default UnstyledLink;
