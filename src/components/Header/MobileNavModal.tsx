import * as Dialog from "@radix-ui/react-dialog";
import type { User } from "@supabase/supabase-js";
import React from "react";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import AuthButtons from "./AuthButtons";
import styles from "./MobileNav.module.css";
import Nav from "./Nav";

type MobileMenuProps = {
  user: User | null;
  className?: string;
  style?: React.CSSProperties;
};

function MobileNav({ user, className, style }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={className} style={style}>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <UnstyledButton>
            <Icon iconName="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.content} aria-label="Menu">
            <div className={styles.header}>
              <Dialog.Close asChild>
                <UnstyledButton>
                  <Icon iconName="x" className={styles.close} />
                  <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </UnstyledButton>
              </Dialog.Close>
            </div>
            {!user?.id && (
              <AuthButtons
                className={styles.authButtons}
                handleClick={() => setIsOpen(false)}
              />
            )}
            <Nav
              className={styles.nav}
              user={user}
              handleClick={() => setIsOpen(false)}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default MobileNav;
