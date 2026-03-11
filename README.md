# AdrianoTS • Presença Digital Ultra Premium

Projeto Next.js criado para centralizar a presença digital de Adriano Tiburcio com duas experiências:

1. Landing page premium (`/`)
2. Cartão interativo estilo link in bio (`/cartao`)

## Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons

## Estrutura de arquivos

```text
src
├── app
│   ├── cartao
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── card
│   │   ├── PremiumCardHeader.tsx
│   │   ├── PremiumChips.tsx
│   │   └── PremiumLinksList.tsx
│   ├── layout
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections
│   │   ├── FinalCtaSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InfluenceSection.tsx
│   │   ├── RaffleSection.tsx
│   │   └── SocialSection.tsx
│   └── ui
│       ├── GlassCard.tsx
│       ├── PremiumButton.tsx
│       └── SectionTitle.tsx
├── data
│   ├── profile.ts
│   └── socialLinks.ts
├── lib
│   └── animations.ts
└── styles
    └── globals.css
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Deploy na Vercel

1. Faça push do repositório para GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Importe o repositório.
4. Configure:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output: padrão da Vercel
5. Clique em **Deploy**.
6. Após publicar, valide as rotas:
   - `/`
   - `/cartao`

## Direção de UX e conversão aplicada

- Hero com CTA principal para rifas (conversão direta)
- Blocos de autoridade (seguidores + prova social)
- Curadoria de redes em cards premium
- Cartão mobile-first com experiência de app
- Microinterações com Framer Motion
