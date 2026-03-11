"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";
import { fadeInUp, stagger } from "@/lib/animations";

export function PremiumLinksList() {
  return (
    <motion.div
      className="mt-8 grid gap-3"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((item) => (
        <motion.a
          key={item.label}
          variants={fadeInUp}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/60 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-zinc-900"
        >
          <div className="flex items-center gap-3">
            <item.icon className="text-zinc-300 transition-colors group-hover:text-gold" size={18} />
            <div>
              <p className="text-sm font-medium text-ivory">{item.label}</p>
              <p className="text-xs text-zinc-400">{item.description}</p>
            </div>
          </div>
          <ArrowUpRight className="text-zinc-500 transition-colors group-hover:text-gold" size={16} />
        </motion.a>
      ))}
    </motion.div>
  );
}
