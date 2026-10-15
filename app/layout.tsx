import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/shared';
import { BackgroundDecorations } from '@/components/BackgroundDecorations';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: 'NZNWCJUeY5WANZJci-oy7EPCT08xS8WNV06CTkYFULs',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.className}`}
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen relative bg-fd-background">
        <BackgroundDecorations />
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            forcedTheme: 'dark',
            enableSystem: false,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
