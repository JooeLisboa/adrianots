import { Container } from "@/components/layout/Container";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

export function RaffleSection() {
  return (
    <section id="rifas" className="py-20 md:py-28">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12">
          <SectionTitle
            eyebrow="Rifas Online"
            title="Ganhe prêmios reais participando das rifas"
            description="A audiência já conhece: quando abre rifa, a comunidade responde. Experiência rápida, confiável e simples."
          />
          <div className="mt-8">
            <PremiumButton href={profile.primaryCta.href} label="Participar agora" />
          </div>
        </div>
      </Container>
    </section>
  );
}
