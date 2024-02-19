import { ReactNode } from "react";

export type CustomFont = {
    children: ReactNode;
    title?: boolean;
    highlightedTitle?: boolean;
    description?: boolean;
    highlightedDescription?: boolean;
    numeric?: boolean;
    border?: boolean;
  };