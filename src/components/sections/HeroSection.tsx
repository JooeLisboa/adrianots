"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { fadeInUp, stagger } from "@/lib/animations";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-hero-glow py-20 md:py-28">
      <Container>
        <motion.div
          className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">{profile.handle}</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-ivory md:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">{profile.heroDescription}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumButton href={profile.primaryCta.href} label={profile.primaryCta.label} />
              <PremiumButton href="/cartao" label="Abrir Cartão Premium" variant="secondary" className="!text-ivory" />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 shadow-premium">
              <Image
                src={profile.heroImage}
                alt="Retrato premium de Adriano Tiburcio"
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
