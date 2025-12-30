"use client";

import * as RadixNav from "@radix-ui/react-navigation-menu";
import type { User } from "@supabase/supabase-js";
import { useLocation } from "@tanstack/react-router";
import NavLink from "./NavLink";

type NavProps = {
  user: User | null;
  className?: string;
  handleClick?: () => void;
};

// TODO: ARCHITECTURE think about whether this should be completely separate for mobile vs desktop
// advantage to having it together? less repeated code, I guess?
function Nav({ user, className, handleClick }: NavProps) {
  const location = useLocation();

  return (
    // wrapper is styled by parent -- it will be different for mobile nav vs desktop nav
    <RadixNav.Root className={className}>
      <NavLink href="/about" location={location} handleClick={handleClick}>
        About
      </NavLink>
      {user?.id ? (
        <>
          <NavLink href="/topic" location={location} handleClick={handleClick}>
            New quiz
          </NavLink>
          <NavLink
            href="/quiz-results"
            location={location}
            handleClick={handleClick}
          >
            Completed quizzes
          </NavLink>
        </>
      ) : null}
    </RadixNav.Root>
  );
}

export default Nav;
