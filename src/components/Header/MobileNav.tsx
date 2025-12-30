import type { User } from "@supabase/supabase-js";
import clsx from "clsx";
import React from "react";
import ColorModeToggle from "../ColorModeToggle";
import type { ColorModeTheme } from "../ColorModeToggle/types";
import AuthButtons from "./AuthButtons";
import styles from "./MobileNav.module.css";
import MobileNavModal from "./MobileNavModal";
import UserMenu from "./UserMenu";

type MobileNavProps = {
  initialTheme: ColorModeTheme;
  user: User | null;
  className: string | null;
};

function MobileNav({ initialTheme, user, className }: MobileNavProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <MobileNavModal style={{ flexGrow: "1" }} user={user} />
      <ColorModeToggle initialTheme={initialTheme} />
      {user ? (
        <UserMenu user={user} />
      ) : (
        <AuthButtons className={styles.authButtons} />
      )}
    </div>
  );
}

export default MobileNav;
