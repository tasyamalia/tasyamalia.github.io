import { academic } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Academic() {
  const Icon = academic.icon;
  const binus = academic.education[0];
  const smk = academic.education[1];
  const externalLinkProps = {
    target: "_blank",
    rel: "noreferrer"
  };

  return (
    <section className="section-shell pb-16">
      <SectionHeading title="Academic Background" />
      <Reveal>
        <Card className="space-y-4 p-5 sm:p-6">
          <div className="grid gap-5 rounded-lg border border-line bg-panel/45 p-5 lg:grid-cols-[1.05fr_1.6fr]">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-green/25 bg-green/10">
                <Icon className="size-6 text-green" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-slate-50">
                  <a className="transition hover:text-green" href={binus.href} {...externalLinkProps}>
                    {binus.school}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {binus.degree}, {binus.major}
                  <br />
                  {binus.campus}
                  <br />
                  {binus.period}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-line bg-background/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">GPA</p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">{binus.gpa}</p>
              </div>
              <div className="rounded-lg border border-line bg-background/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Achievement</p>
                <p className="mt-2 font-semibold text-gold">{binus.honor}</p>
                <p className="mt-2 font-semibold text-gold">{binus.achievement}</p>
              </div>
              <div className="rounded-lg border border-line bg-background/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Focus Area</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {binus.focus.map((item) => (
                    <Badge key={item} className="border-line bg-panel text-slate-300">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 rounded-lg border border-line bg-panel/45 p-5 lg:grid-cols-[1.05fr_1.6fr]">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-green/25 bg-green/10">
                <Icon className="size-6 text-green" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-slate-50">
                  <a className="transition hover:text-green" href={smk.href} {...externalLinkProps}>
                    {smk.school}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {smk.level}
                  <br />
                  {smk.degree}
                  <br />
                  {smk.period}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[0.8fr_2fr]">
              <div className="rounded-lg border border-line bg-background/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Achievement</p>
                <p className="mt-2 font-semibold text-gold">{smk.achievement}</p>
              </div>
              <div className="rounded-lg border border-line bg-background/45 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Highlights</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {smk.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="text-sm leading-6 text-slate-300"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
