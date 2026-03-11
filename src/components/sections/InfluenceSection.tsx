"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { fadeInUp, stagger } from "@/lib/animations";

const influenceItems = [
  { title: "1.2M seguidores", subtitle: "Audiência massiva e engajada", icon: Users },
  { title: "Criador viral", subtitle: "Conteúdo com alcance constante", icon: TrendingUp },
  { title: "Humor & nostalgia", subtitle: "Assinatura autêntica de entretenimento", icon: Sparkles }
];

export function InfluenceSection() {
  return (
    <section id="influencia" className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="Influência"
          title="Autoridade digital construída com consistência"
          description="Quando entretenimento encontra estratégia, resultado vira crescimento sólido e recorrente."
        />
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {influenceItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-3xl border border-white/10 bg-zinc-900/45 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <item.icon className="mb-4 text-gold" size={22} />
              <h3 className="text-xl font-medium text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
