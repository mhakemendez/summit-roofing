import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "glass" | "light";
type ButtonSize = "md" | "lg";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-navy shadow-[0_12px_30px_-14px_rgba(242,140,56,0.75)] hover:bg-[#e37d2c] focus-visible:outline-navy",
  secondary:
    "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
  glass:
    "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20",
  light: "bg-white text-navy hover:bg-cream",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-12 px-5",
  lg: "h-14 px-7",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleOptions = {}): string {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

type ButtonLinkProps = ComponentProps<"a"> & ButtonStyleOptions;

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buttonStyles({ variant, size, className })} {...props} />
  );
}
