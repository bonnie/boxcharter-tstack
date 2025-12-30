import styles from "./ColorModeToggle.module.css";
import type { ColorModeTheme } from "./types";

type ColorModeToggleProps = { initialTheme: ColorModeTheme };

const ColorModeToggle = ({ initialTheme = "light" }: ColorModeToggleProps) => {
  return <div className={styles.wrapper}></div>;
};

export default ColorModeToggle;

// import * as Toggle from "@radix-ui/react-toggle";
// import Cookie from "js-cookie";
// import React from "react";
// import { Moon, Sun } from "react-feather";

// import { COOKIE_NAMES } from "~/constants";
// import { css, cx } from "~/styled-system/css";
// import { VisuallyHidden } from "~/styled-system/jsx";

// import type { ColorModeTheme } from "./types";

// export type ColorModeToggleProps = {
//   initialTheme: ColorModeTheme;
//   className?: string;
// } & React.ComponentPropsWithRef<"button">;

// function ColorModeToggle({
//   initialTheme,
//   className,
//   ...delegated
// }: ColorModeToggleProps) {
//   const [theme, setTheme] = React.useState(initialTheme);
//   const isLight = theme === "light";
//   const nextTheme = theme === "light" ? "dark" : "light";

//   // const router = useRouter();

//   function handleChange() {
//     // Update the state variable.
//     // This causes the Sun/Moon icon to flip.
//     setTheme(nextTheme);

//     // Write the cookie for future visits
//     Cookie.set(COOKIE_NAMES.colorTheme, nextTheme, {
//       expires: 1000, // 1000 days -- needs expiration or will be a session cookie and will disappear
//     });

//     // router.refresh();

//     // Apply the new colors to the root HTML tag.
//     // const COLORS = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

//     const root = document.documentElement;
//     root.setAttribute("data-color-theme", nextTheme);

//     // Object.entries(COLORS, ({ variable, value }) =>
//     //   root.style.setProperty(variable, value)
//     // );
//   }

//   return (
//     <Toggle.Root
//       {...delegated}
//       onPressedChange={handleChange}
//       pressed={isLight}
//       className={cx("color-mode-toggle", styles.wrapper, className)}
//       title={`switch to ${nextTheme} mode`}
//       aria-label={`switch to ${nextTheme} mode`}
//     >
//       {/* <CheckInput type="checkbox" id="color-mode-toggle" checked={isLight} /> */}
//       <VisuallyHidden>Light and dark mode toggle</VisuallyHidden>
//       <div className={styles.selector} />
//       <Sun className={cx(styles.icon)} size={18} />
//       <Moon className={cx(styles.icon)} size={18} />
//     </Toggle.Root>
//   );
// }
