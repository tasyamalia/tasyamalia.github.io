import { beyondItems, buildItems, domainGroups, workStyle } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

function MiniCard({ item }: { item: (typeof buildItems)[number] }) {
  const Icon = item.icon;
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-panel">
        <Icon className={`size-5 accent-${item.accent}`} />
      </span>
      <p className="text-sm leading-6 text-slate-200">{item.title}</p>
    </div>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="section-shell pb-16">
      <SectionHeading
        title="Domain Expertise"
        subtitle="Production experience across real financial products and critical user journeys."
        className="mb-7"
      />

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Card className="h-full p-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-green">What I Build</p>
            <div className="space-y-4">
              {buildItems.map((item) => (
                <MiniCard key={item.title} item={item} />
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="h-full p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {domainGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-line bg-panel/55 p-4">
                  <p className={`mb-3 text-sm font-semibold accent-${group.accent}`}>{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-card/70 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Reveal delay={0.12}>
          <Card className="h-full p-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-green">How I Work</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {workStyle.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border border-line bg-panel/55 p-4">
                    <Icon className={`mb-4 size-5 accent-${item.accent}`} />
                    <p className="font-semibold text-slate-100">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.18}>
          <Card className="h-full p-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-green">
              Beyond Building Features
            </p>
            <div className="space-y-4">
              {beyondItems.map((item) => (
                <MiniCard key={item.title} item={item} />
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
