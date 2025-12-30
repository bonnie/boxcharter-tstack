"use client";

import { useRouter } from "@tanstack/react-router";
import clsx from "clsx";
import type React from "react";

import Button from "../Button";
import styles from "./AuthButtons.module.css";

type AuthButtonsProps = {
  className?: string;
  style?: React.CSSProperties;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function AuthButtons({ className, style, handleClick }: AuthButtonsProps) {
  const router = useRouter();

  return (
    <div className={clsx(styles.wrapper, className)} style={style}>
      <Button
        onClick={(event) => {
          if (handleClick) handleClick(event);
          router.navigate({ to: "/sign-up" });
        }}
      >
        Sign up
      </Button>
      <Button
        onClick={(event) => {
          if (handleClick) handleClick(event);
          router.navigate({ to: "/sign-in" });
        }}
      >
        Sign in
      </Button>
    </div>
  );
}

export default AuthButtons;
