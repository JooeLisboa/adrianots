import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  children
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-ivory md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base text-zinc-300">{description}</p> : null}
      {children}
    </div>
  );
}
