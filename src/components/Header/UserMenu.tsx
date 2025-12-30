import type { User } from "@supabase/supabase-js";
import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./UserMenu.module.css";
import UserMenuDropdown from "./UserMenuDropdown";

export type UserMenuProps = {
  user: User;
};

function UserMenu({ user }: UserMenuProps) {
  // look at supabase instance auth schema, session table for these properties
  const userMetadata = user.user_metadata;
  const userProvider = user.app_metadata.provider;

  let userName = "";
  let imgSrc = "";

  // user metadata shape depends on provider
  // google user.app_metadata looks like this
  //    app_metadata: { provider: 'email', providers: [ 'email', 'google' ] },
  if (
    userProvider === "email" &&
    user.app_metadata.providers &&
    user.app_metadata.providers.includes("google")
  ) {
    userName = userMetadata.full_name ?? userMetadata.email;
    imgSrc = userMetadata.avatar_url ?? userMetadata.picture;
  } else if (userProvider === "github") {
    // lots of choices here, go in descending order of preference
    userName =
      userMetadata.full_name ??
      userMetadata.name ??
      userMetadata.preferred_userName ??
      userMetadata.email;
    imgSrc = userMetadata.avatar_url;
  } else {
    // this is a supabase email user
    userName = user.email ?? "";
    imgSrc = "";
  }

  const initials = getInitials(userName);
  const buttonLabel = "User options";
  const AvatarImage = imgSrc ? (
    <img
      className={styles.avatarImage}
      src={imgSrc}
      alt="user avatar"
      aria-label={buttonLabel}
    />
  ) : (
    <div className={styles.initials}>
      <VisuallyHidden>User options</VisuallyHidden>
      {initials}
    </div>
  );

  return <UserMenuDropdown AvatarImage={AvatarImage} userName={userName} />;
}

function getInitials(name: string) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  // restrict to two initials, so letters don't overflow
  if (initials.length > 2) {
    return initials[0] + initials[initials.length - 1];
  }

  return initials;
}

export default UserMenu;
