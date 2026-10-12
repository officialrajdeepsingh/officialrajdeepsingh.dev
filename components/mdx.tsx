import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card } from '@/components/Card';
import { Collaboration } from '@/components/Collaboration';
import { XTweet } from '@/components/Tweet';

export function Alert({ children, ...props }: any) {
  return <Callout {...props}>{children}</Callout>;
}

export function Space() {
  return <div className="my-6" />;
}

export function Iframe({
  url,
  src,
  width = '100%',
  height = '450px',
  className,
  id,
  title = 'Embedded content',
}: any) {
  return (
    <div className="my-6 w-full overflow-hidden rounded-lg border border-fd-border">
      <iframe
        src={url || src}
        width={width}
        height={height}
        className={`w-full ${className || ''}`}
        id={id}
        title={title}
        loading="lazy"
      />
    </div>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Alert,
    Space,
    Card,
    Collaboration,
    XTweet,
    Iframe,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
