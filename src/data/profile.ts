export type ProfileData = {
  name: string;
  handle: string;
  followers: string;
  title: string;
  bio: string;
  headline: string;
  heroDescription: string;
  primaryCta: {
    label: string;
    href: string;
  };
  avatar: string;
  heroImage: string;
};

export const profile: ProfileData = {
  name: "Adriano Tiburcio",
  handle: "@_adrianots",
  followers: "1.2M",
  title: "Artista • Criador de Conteúdo",
  bio: "Humor e nostalgia em versão premium. Se é prêmio, entrega é garantida.",
  headline: "Humor, nostalgia e prêmios que mudam o jogo.",
  heroDescription:
    "Uma presença digital criada para conectar comunidade, converter audiência e elevar a marca AdrianoTS ao nível máximo.",
  primaryCta: {
    label: "Participar das Rifas",
    href: "https://www.adrianots.com/",
  },
  avatar: "/avatar-adriano.jpg",
  heroImage: "/avatar-adriano.jpg",
};
