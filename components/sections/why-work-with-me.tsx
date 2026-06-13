import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  "Built products with 20M+ total downloads",
  "Experienced across Android, Flutter, and fintech domains",
  "Strong ownership from design discussion to production release",
  "Proven track record delivering transaction-critical features",
  "Focused on reliability, maintainability, and user trust"
];

export function WhyWorkWithMe() {
  return (
    <section className="section-shell pb-16">
      <Reveal>
        <Card className="p-6 sm:p-8">
          <SectionHeading
            title="Why Work With Me"
            subtitle="A concise answer for hiring teams comparing strong mobile engineers."
            className="mb-6"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-lg border border-line bg-panel/60 p-4">
                <CheckCircle2 className="mb-4 size-5 text-green" />
                <p className="text-sm leading-6 text-slate-200">{reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
