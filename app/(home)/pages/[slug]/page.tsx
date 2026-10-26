import { notFound } from 'next/navigation';
import { pageSource } from '@/lib/source';
import { getMDXComponents } from '@/components/mdx';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';

interface StaticPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = pageSource.getPages();
  return pages.map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: StaticPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const page = pageSource.getPage([slug]);
  if (!page) return {};

  return {
    title: `${page.data.title} | Rajdeep Singh`,
    description: page.data.description,
  };
}

export default async function StandalonePage(props: StaticPageProps) {
  const { slug } = await props.params;
  const page = pageSource.getPage([slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="container max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <header className="pb-6">
        <h1 className="text-3xl text-left sm:text-4xl font-bold tracking-tight text-fd-foreground mb-3">
          {page.data.title}
        </h1>
      </header>
      <DocsBody className="prose dark:prose-invert max-w-none leading-relaxed">
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </div>
  );
}
