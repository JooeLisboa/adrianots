import { Container } from "@/components/layout/Container";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { profile } from "@/data/profile";

export function FinalCtaSection() {
  return (
    <section className="border-t border-white/10 py-20">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Comunidade AdrianoTS</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-ivory md:text-5xl">
          Se é nostalgia, a gente entrega. Se é prêmio, a gente entrega também.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-zinc-300">
          Entre para a comunidade AdrianoTS e acompanhe os próximos conteúdos, campanhas e sorteios exclusivos.
        </p>
        <div className="mt-10">
          <PremiumButton href={profile.primaryCta.href} label="Entre para a comunidade AdrianoTS" />
        </div>
      </Container>
    </section>
  );
}
