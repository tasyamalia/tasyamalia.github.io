import { CodeXml } from "lucide-react";
import { stack } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const accents = ["green", "gold", "blue", "purple"] as const;

export function TechStack() {
  return (
    <section id="tech-stack" className="section-shell pb-16">
      <Reveal>
        <Card className="p-6">
          <SectionHeading title="Tech Stack" className="mb-5" />
          <div className="flex flex-wrap gap-3">
            {stack.map((item, index) => {
              const accent = accents[index % accents.length];
              return (
                <Badge key={item} className="gap-2.5 border-line bg-panel px-4 py-2 text-slate-200">
                  <CodeXml className={`size-3.5 shrink-0 accent-${accent}`} />
                  <span>{item}</span>
                </Badge>
              );
            })}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
