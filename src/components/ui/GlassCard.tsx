import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
