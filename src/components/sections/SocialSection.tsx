"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { socialLinks } from "@/data/socialLinks";
import { fadeInUp, stagger } from "@/lib/animations";

export function SocialSection() {
  return (
    <section id="redes" className="border-y border-white/10 bg-zinc-950/30 py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="Redes"
          title="Onde a comunidade vive cada momento"
          description="Todos os canais oficiais em uma curadoria única para gerar alcance, tráfego e conexão."
        />
        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {socialLinks.slice(0, 4).map((item) => (
            <motion.a
              key={item.label}
              variants={fadeInUp}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-zinc-900/70"
            >
              <item.icon className="text-platinum transition-colors group-hover:text-gold" size={20} />
              <h3 className="mt-4 text-xl text-ivory">{item.label}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
