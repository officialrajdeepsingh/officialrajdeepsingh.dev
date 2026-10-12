import Link from 'next/link';

export function Card({
  tittle,
  title,
  description,
  url,
}: {
  tittle?: string;
  title?: string;
  description: string;
  url: string;
}) {
  return (
    <Link
      target="_blank"
      href={url}
      key={url}
      className="group block my-4 p-5 rounded-lg border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm hover:border-fd-primary/40 hover:bg-fd-muted/30 transition-all no-underline"
    >
      <div>
        <h3 className="my-0 font-medium text-base text-fd-foreground group-hover:text-fd-primary transition-colors">
          {title || tittle}
        </h3>
        <p className="mt-1.5 mb-0 text-sm text-fd-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}