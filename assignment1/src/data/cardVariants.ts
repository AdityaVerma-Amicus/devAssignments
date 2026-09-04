import type { CardProps } from "../components/Card";
export const cardVariants: Omit<CardProps, "children" | "footer">[] = [
  {
    title: "Default Card",
    variant: "default",
  },
  {
    title: "Highlighted Card",
    variant: "highlighted",
  },
  {
    title: "Compact Card",
    variant: "compact",
  },
];