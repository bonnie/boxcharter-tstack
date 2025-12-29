// adapted from Josh Comeau's CSS Course Sole and Ankle code

import type React from "react";

import { COLOR_MAP, ICON_MAP } from "./constants";
import type { ColorName, IconName } from "./types";

type IconProps = {
  iconName: IconName;
  color?: ColorName;
  size?: number;
  strokeWidth?: number;
  className?: string;
} & React.ComponentProps<"div">;

export default function Icon({
  iconName,
  color,
  size,
  strokeWidth,
  className,
  ...delegated
}: IconProps) {
  const IconComponent = ICON_MAP[iconName];

  return (
    <div className={className} {...delegated}>
      <IconComponent
        strokeWidth={strokeWidth}
        color={color ? COLOR_MAP[color] : "currentColor"}
        size={size}
      />
    </div>
  );
}
