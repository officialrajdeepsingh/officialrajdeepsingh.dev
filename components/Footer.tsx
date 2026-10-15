import Link from 'next/link';
import { socialLinks } from '@/lib/shared';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-fd-border bg-fd-background/50 py-8 text-sm text-fd-muted-foreground">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Legal links */}
        <nav className="flex flex-wrap items-center gap-4 text-xs">
          <span className="font-medium text-fd-foreground">Legal:</span>
          <Link href="/pages/disclaimer" className="hover:text-fd-foreground transition-colors">
            Disclaimer
          </Link>
          <Link href="/pages/privacy-policy" className="hover:text-fd-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/pages/terms-and-conditions" className="hover:text-fd-foreground transition-colors">
            Terms & Conditions
          </Link>
        </nav>

        {/* Social media */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-fd-foreground transition-colors underline underline-offset-4"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
