"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "@tanstack/react-router";
import clsx from "clsx";
import type React from "react";

import Card from "../Card";
// to remove focus styles and other button styles from menu items.
// Radix example uses button { all: unset } css instead.
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import commonStyles from "./commonStyles.module.css";

import styles from "./UserMenuDropdown.module.css";

type UserMenuDropdownProps = {
  AvatarImage: React.ReactNode;
  userName: string;
};

function UserMenuDropdown({ AvatarImage, userName }: UserMenuDropdownProps) {
  const router = useRouter();

  const handleSignOut = () => {
    router.navigate({ to: "/sign-out" });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <UnstyledButton
          style={{
            border: "6px solid var(--color-avatar-border)",
            borderRadius: "100%",
          }}
          className={commonStyles.headerIcon}
        >
          {AvatarImage}
        </UnstyledButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content asChild sideOffset={5}>
          {/* need style to override Card styles (I think?) */}
          <Card
            style={{
              // TODO: ARCHITECTURE again, let's not hard-code gap into card mkay -- or... just use gradient background and not full card component
              gap: "0px",
              alignItems: "flex-start",
              margin: "0 1rem", // don't think I can use a token here...? can't use mx
              padding: "0.5rem", // can't use a token here
              fontFamily: "var(--font-family-display)",
              animation: "var(--animations-slide-down-and-fade)",
            }}
          >
            <DropdownMenu.Item
              className={clsx(styles.item, styles.username)}
              style={{ fontWeight: "bold" }}
              disabled={true}
            >
              {userName}
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={styles.separator} />
            <DropdownMenu.Item className={styles.item} onClick={handleSignOut}>
              "Sign out"
            </DropdownMenu.Item>
          </Card>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserMenuDropdown;
