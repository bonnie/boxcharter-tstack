import type { User } from "@supabase/supabase-js";
import clsx from "clsx";
import ColorModeToggle from "../ColorModeToggle";
import type { ColorModeTheme } from "../ColorModeToggle/types";
import AuthButtons from "./AuthButtons";
import styles from "./DesktopNav.module.css";
import Nav from "./Nav";
import UserMenu from "./UserMenu";

type DesktopNavProps = {
  className: string | null;
  initialTheme: ColorModeTheme;
  user: User | null;
};

function DesktopNav({ className, initialTheme, user }: DesktopNavProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Nav className={styles.nav} user={user} />
      {/* <ColorModeToggle initialTheme={initialTheme} /> */}
      {user?.id ? <UserMenu user={user} /> : <AuthButtons />}
    </div>
  );
}

export default DesktopNav;
