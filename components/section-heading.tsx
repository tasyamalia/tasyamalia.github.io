import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-7 flex flex-wrap items-end justify-between gap-3", className)}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green">{title}</p>
      </div>
      {subtitle ? <p className="max-w-md text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}
