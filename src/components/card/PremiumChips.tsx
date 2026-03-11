const chips = ["1.2M seguidores", "Criador viral", "Humor & nostalgia"];

export function PremiumChips() {
  return (
    <div className="mt-7 flex flex-wrap justify-center gap-2">
      {chips.map((chip) => (
        <span key={chip} className="rounded-full border border-white/10 bg-zinc-900/70 px-4 py-2 text-xs text-zinc-200">
          {chip}
        </span>
      ))}
    </div>
  );
}
