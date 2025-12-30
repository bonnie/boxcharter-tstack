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
  location?: "";
  isExternal: boolean;
};

function NavLink({
  location = "",
  isExternal = false,
  href,
  className,
  handleClick,
  children,
}: NavLinkProps | ExternalNavLinkProps) {
  // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
  return (
    <NavigationMenu.Item
      className={clsx(className, styles.wrapper)}
      // status={location.startsWith(href) ? "active" : "inactive"}
      asChild
      onClick={handleClick}
    >
      <UnstyledListItem>
        <NavigationMenu.Link asChild>
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
