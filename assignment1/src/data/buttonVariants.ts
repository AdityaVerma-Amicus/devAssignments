import {
  ButtonSize,
  ButtonVariant,
} from "../components/Button";

const variants = [
  ButtonVariant.PRIMARY,
  ButtonVariant.SECONDARY,
  ButtonVariant.DANGER,
  ButtonVariant.OUTLINE,
];

const sizes = [
  ButtonSize.SM,
  ButtonSize.MD,
  ButtonSize.LG,
];

export const buttonVariants = variants.flatMap((variant) =>
  sizes.map((size) => ({
    text: `${variant} ${size}`,
    variant,
    size,
  }))
);