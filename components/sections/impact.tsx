import { metrics } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function Impact() {
  return (
    <section className="section-shell pb-16">
      <Reveal>
        <Card className="p-6 sm:p-8">
          <SectionHeading
            title="Engineering Impact"
            subtitle="Production experience across financial products used at scale."
            className="mb-8"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-lg border border-line bg-panel/60 p-4">
                  <Icon className={`mb-5 size-7 accent-${metric.accent}`} />
                  <p className={`text-3xl font-semibold accent-${metric.accent}`}>{metric.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
