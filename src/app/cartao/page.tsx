import { PremiumCardHeader } from "@/components/card/PremiumCardHeader";
import { PremiumChips } from "@/components/card/PremiumChips";
import { PremiumLinksList } from "@/components/card/PremiumLinksList";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { profile } from "@/data/profile";

export default function CardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-noir via-zinc-950 to-black px-4 py-10">
      <div className="mx-auto max-w-md">
        <GlassCard className="p-6 shadow-premium">
          <PremiumCardHeader />
          <PremiumChips />
          <div className="mt-7 flex justify-center">
            <PremiumButton href={profile.primaryCta.href} label="Participar das rifas" className="w-full justify-center" />
          </div>
          <PremiumLinksList />
        </GlassCard>
      </div>
    </main>
  );
}
