export function Section({
  eyebrow,
  title,
  description,
  children,
  className = ""
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-px py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-green">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
