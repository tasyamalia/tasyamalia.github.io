import { CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-shell pb-16">
      <SectionHeading title="Experience" />
      <div className="relative space-y-5 before:absolute before:left-4 before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-line">
        {experiences.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.08}>
            <div className="relative grid gap-4 pl-10 lg:grid-cols-[210px_1fr]">
              <span className="absolute left-[11px] top-7 size-3 rounded-full border border-background bg-green shadow-glow" />
              <p className="pt-6 text-sm text-muted">{item.period}</p>
              <Card className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">{item.role}</h3>
                    <p className="mt-1 font-medium text-green">{item.company}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="size-4 shrink-0 text-green" />
                      {highlight}
                    </div>
                  ))}
                </div>
                {item.responsibilities ? (
                  <div className="mt-6 rounded-lg border border-line bg-panel/45 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                      Additional Responsibilities
                    </p>
                    {item.responsibilityDescription ? (
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{item.responsibilityDescription}</p>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.responsibilities.map((responsibility) => (
                        <Badge key={responsibility} className="border-line bg-card/75 text-slate-200">
                          {responsibility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}
                {item.projects ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.projects.map((project) => (
                      <Badge key={project}>{project}</Badge>
                    ))}
                  </div>
                ) : null}
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
