import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PremiumButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PremiumButton({ href, label, variant = "primary", className = "" }: PremiumButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "border-gold bg-gold text-noir hover:-translate-y-0.5 hover:shadow-soft"
      : "border-zinc-700 bg-zinc-900/40 text-ivory hover:border-platinum hover:bg-zinc-800/70";

  return (
    <Link className={`${base} ${styles} ${className}`} href={href} target="_blank" rel="noreferrer">
      {label}
      <ArrowUpRight size={16} />
    </Link>
  );
}
