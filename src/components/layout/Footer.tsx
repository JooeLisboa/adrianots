import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ivory">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-400">Presença premium para quem vive de influência real.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
          {socialLinks.slice(0, 4).map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-gold">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
