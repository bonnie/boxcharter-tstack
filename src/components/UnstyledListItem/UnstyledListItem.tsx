import clsx from "clsx";
import type React from "react";

import styles from "./UnstyledListItem.module.css";

function UnstyledListItem({
  children,
  className,
  ...delegated
}: React.ComponentPropsWithRef<"li">) {
  return (
    <li className={clsx(className, styles.wrapper)} {...delegated}>
      {children}
    </li>
  );
}

export default UnstyledListItem;
