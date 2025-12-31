import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { ParsedLocation } from "@tanstack/react-router";
import clsx from "clsx";
import type React from "react";
import UnstyledLink from "../UnstyledLink";
import UnstyledListItem from "../UnstyledListItem";
import styles from "./NavLink.module.css";

type NavLinkBaseProps = {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  handleClick?: () => void;
};

type NavLinkProps = NavLinkBaseProps & {
  location: ParsedLocation;
  isExternal?: false;
};

type ExternalNavLinkProps = NavLinkBaseProps & {
  location?: undefined;
  isExternal: boolean;
};

function NavLink({
  location,
  isExternal = false,
  href,
  className,
  handleClick,
  children,
}: NavLinkProps | ExternalNavLinkProps) {
  const isActive = !!location && location?.href === href;
  const activeClass = isActive ? styles.active : styles.inactive;

  // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
  return (
    <NavigationMenu.Item
      className={clsx(className, styles.wrapper, activeClass)}
      asChild
      onClick={handleClick}
    >
      <UnstyledListItem>
        <NavigationMenu.Link asChild active={isActive}>
          {isExternal ? (
            <a href={href} target="_blank">
              {children}
            </a>
          ) : (
            <UnstyledLink href={href}>{children}</UnstyledLink>
          )}
        </NavigationMenu.Link>
      </UnstyledListItem>
    </NavigationMenu.Item>
  );
}

export default NavLink;
