import Link from "next/link";
import { profile } from "@/data/profile";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-noir/75 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-ivory">
          AdrianoTS
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <Link href="#influencia" className="transition-colors hover:text-ivory">
            Influência
          </Link>
          <Link href="#redes" className="transition-colors hover:text-ivory">
            Redes
          </Link>
          <Link href="#rifas" className="transition-colors hover:text-ivory">
            Rifas
          </Link>
        </nav>
        <PremiumButton href={profile.primaryCta.href} label="Entrar nas Rifas" className="hidden md:inline-flex" />
      </Container>
    </header>
  );
}
