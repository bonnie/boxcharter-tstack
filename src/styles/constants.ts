export const COLORS = {
  white: "hsl(0, 0%, 100%)",
  offblack: "hsl(24, 5%, 6%)",
  gray: {
    50: "hsl(0, 0%, 98%)",
    100: "hsl(240, 5%, 96%)",
    200: "hsl(240, 6%, 90%)",
    300: "hsl(240, 5%, 84%)",
    400: "hsl(240, 5%, 65%)",
    500: "hsl(240, 4%, 46%)",
    600: "hsl(240, 5%, 34%)",
    700: "hsl(240, 5%, 26%)",
    900: "hsl(240, 6%, 10%)",
  },
  primary: {
    100: "hsl(202, 47%, 70%)",
    300: "hsl(202, 47%, 50%)",
    500: "hsl(210, 51%, 41%)",
    800: "hsl(207, 35%, 20%)",
    900: "hsl(208, 36%, 15%)",
  },
  secondary: {
    300: "hsl(34, 70%, 55%)",
    500: "hsl(26, 66%, 46%)",
    800: "hsl(9, 66%, 46%)",
  },
  theme: {
    red: "hsl(9, 66%, 46%)",
  },
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: `${550 / 16}rem`,
  laptopMin: `${1100 / 16}rem`,
  desktopMin: `${1500 / 16}rem`,
};

export const QUERIES = {
  tabletBreakpoint: `min-width: ${BREAKPOINTS.tabletMin}`,
  laptopBreakpoint: `min-width: ${BREAKPOINTS.laptopMin}`,
  widgetBreakpoint: `min-width: 940px`,
  desktopBreakpoint: `min-width: ${BREAKPOINTS.desktopMin}`,
  motionOK: `prefers-reduced-motion: no-preference`,
};

export const HEIGHTS = {
  header: 4 * 16, // 4rem
};
