import "./Button.css";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  OUTLINE = "outline",
}

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: ButtonVariant;
  disabled?: boolean;
  size: ButtonSize;
}

function Button({
  text,
  onClick,
  variant,
  disabled = false,
  size,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant} ${size}`}
    >
      {text}
    </button>
  );
}

export default Button;