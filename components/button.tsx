import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost" | "white";
};

export function ButtonLink({ className = "", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-brand-green text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-dark",
    secondary:
      "border border-brand-green/25 bg-white text-brand-dark shadow-card hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-mint",
    ghost: "text-brand-dark hover:bg-brand-mint",
    white: "bg-white text-brand-dark shadow-card hover:-translate-y-0.5 hover:bg-brand-mint"
  };

  return (
    <Link
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
