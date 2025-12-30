// adapted from https://github.com/css-for-js/sole-and-ankle-animated/blob/main/src/components/VisuallyHidden/VisuallyHidden.js

"use client";

import React from "react";

import { ReactChildrenProps } from "../../types";
import styles from "./VisuallyHidden.module.css";

export default function VisuallyHidden({
  children,
  ...delegated
}: ReactChildrenProps) {
  const [forceShow, setForceShow] = React.useState(false);

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keydown", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <>{children}</>;
  }

  return (
    <div className={styles.wrapper} {...delegated}>
      {children}
    </div>
  );
}
