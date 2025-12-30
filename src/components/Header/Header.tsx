import type { User } from "@supabase/supabase-js";
import { Link } from "@tanstack/react-router";
import React from "react";
import boxcharterLogo from "../../images/boxcharter-logo.svg";
import commonStyles from "./commonStyles.module.css";
import DesktopNav from "./DesktopNav";
import styles from "./Header.module.css";

type HeaderProps = {
  user: User | null;
};

async function Header({ user }: HeaderProps) {
  // TODO: fix this when implementing color theming
  const initialTheme = "light";

  // instead of explicitly specifying width, use flex-basis / flex-grow to make
  //    sure it takes up 100% of the width
  // this is the way to avoid having to consider the scroll bars in the width
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link className={commonStyles.headerIcon} to="/">
          {boxcharterLogo}
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
