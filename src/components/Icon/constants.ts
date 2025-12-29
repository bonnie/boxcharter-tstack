import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Ban,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Database,
  HardDrive,
  HeartHandshake,
  Laptop,
  Loader,
  Menu,
  Moon,
  Send,
  Sun,
  User,
  X,
} from "lucide-react";

import { COLORS } from "~/styles/constants";

// to avoid loading all the icons every time. How necessary is this?
export const ICON_MAP = {
  sun: Sun,
  moon: Moon,
  menu: Menu,
  x: X,
  arrowLeftCircle: ArrowLeftCircle,
  arrowRightCircle: ArrowRightCircle,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  loader: Loader,
  user: User,
  laptop: Laptop,
  client: Laptop,
  hardDrive: HardDrive,
  server: HardDrive,
  database: Database,
  correct: CheckCircle,
  incorrect: Ban,
  both: HeartHandshake,
  send: Send,
};

export const COLOR_MAP = {
  "primary-300": COLORS.primary[300],
  "primary-500": COLORS.primary[500],
  "secondary-300": COLORS.secondary[300],
  "secondary-500": COLORS.secondary[500],
  "theme-red": COLORS.theme.red,
};
