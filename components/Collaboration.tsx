import Link from 'next/link';

export function Collaboration() {
  return (
    <section className="mt-12 w-full rounded-xl border border-fd-border bg-fd-muted/30 p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-fd-foreground">
            Have a project or question?
          </h3>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            Feel free to reach out for business inquiries, questions, or collaboration.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="/pages/contact"
            className="inline-flex items-center justify-center rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
