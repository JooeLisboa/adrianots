import Image from "next/image";
import { profile } from "@/data/profile";

export function PremiumCardHeader() {
  return (
    <div className="text-center">
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-white/20 shadow-soft">
        <Image src={profile.avatar} alt={profile.name} width={96} height={96} className="h-full w-full object-cover" />
      </div>
      <h1 className="mt-4 text-2xl font-semibold text-ivory">{profile.name}</h1>
      <p className="mt-1 text-sm text-zinc-400">{profile.title}</p>
      <p className="mx-auto mt-4 max-w-sm text-sm text-zinc-300">{profile.bio}</p>
    </div>
  );
}
