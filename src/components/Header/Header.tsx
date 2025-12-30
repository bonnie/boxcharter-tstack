import type { User } from "@supabase/supabase-js";
import { Link } from "@tanstack/react-router";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import styles from "./Header.module.css";

type HeaderProps = {
  user: User | null;
};

function Header({ user }: HeaderProps) {
  // TODO: fix this when implementing color theming
  const initialTheme = "light";

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
        <DesktopNav
          className={styles.desktop}
          initialTheme={initialTheme}
          user={user}
        />
      </header>
    </div>
  );
}

export default Header;
