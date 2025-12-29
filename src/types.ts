import type React from "react";
import type { ReactNode } from "react";

export interface ReactChildrenProps {
  children: ReactNode;
}

export interface StyledReactProps {
  className?: string;
  style?: React.CSSProperties;
}

export type StyledReactChildrenProps = StyledReactProps & ReactChildrenProps;

export type DataVariation = "skeleton" | "normal";

export type Talk = {
  title: string;
  talkDate: Date;
  videoLink?: string;
  conference: {
    name: string;
    link: string;
  };
};

export type TalktWithSlug = Talk & { slug: string };

export type BlogPostMetadata = {
  title: string;
  abstract: string;
  publishedOn: string;
  slug: string;
};

export type ColorMode = "light" | "dark";
