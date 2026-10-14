import Image from 'next/image';
import { profileData } from '@/data/portfolio';

export function HeaderAvatar() {
  return (
    <div
      className="relative size-8 rounded-full ring-2 ring-fd-border/70 hover:ring-fd-primary/70 transition-all overflow-hidden bg-fd-muted shadow-xs hover:scale-105 active:scale-95 shrink-0"
      title={`${profileData.name} on X`}
    >
      <Image
        src={profileData.avatarUrl}
        alt={profileData.name}
        fill
        sizes="32px"
        priority
        className="object-cover object-top"
      />
    </div>
  );
}
