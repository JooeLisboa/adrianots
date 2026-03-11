import { Facebook, Globe, Instagram, type LucideIcon, Users, Youtube } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_adrianots",
    icon: Instagram,
    description: "Bastidores, humor diário e novidades em primeira mão."
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@_adrianots",
    icon: Youtube,
    description: "Vídeos autorais com nostalgia, entretenimento e histórias reais."
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@_adrianots2",
    icon: Globe,
    description: "Cortes virais e trends com personalidade AdrianoTS."
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100006646592797",
    icon: Facebook,
    description: "Comunidade ativa e conteúdos que marcaram época."
  },
  {
    label: "Site de Rifas",
    href: "https://www.adrianots.com/",
    icon: Globe,
    description: "Participe para concorrer a prêmios reais."
  },
  {
    label: "Comunidade",
    href: "https://www.instagram.com/_adrianots",
    icon: Users,
    description: "Entre para a comunidade AdrianoTS e fique por dentro de tudo."
  }
];
