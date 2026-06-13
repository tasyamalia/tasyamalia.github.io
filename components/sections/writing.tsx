import { ArrowRight, Linkedin } from "lucide-react";
import { Reveal } from "@/components/motion";
import { WritingNoteArt } from "@/components/writing-note-art";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const posts = [
  {
    title: "Engineering insights on LinkedIn",
    description: "I share things I learn about Android, architecture, and building reliable apps."
  },
  {
    title: "Lessons from building fintech apps",
    description: "Real-world lessons from building scalable fintech systems."
  }
];

const linkedInActivityUrl = "https://www.linkedin.com/in/tasya-amalia-salsabila/recent-activity/all/";

export function Writing() {
  return (
    <section id="writing" className="section-shell pb-16">
      <SectionHeading title="Writing" />
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.85fr]">
        {posts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.08}>
            <Card className="h-full p-6">
              <div className="mb-5 grid size-12 place-items-center rounded-lg bg-blue/15 text-blue">
                <Linkedin className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">{post.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{post.description}</p>
              <a
                href={linkedInActivityUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green"
              >
                Read on LinkedIn <ArrowRight className="size-4" />
              </a>
            </Card>
          </Reveal>
        ))}
        <Reveal delay={0.16}>
          <Card className="relative min-h-56 overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(179,109,255,0.26),transparent_32%),linear-gradient(135deg,rgba(77,168,255,0.12),transparent_45%)]" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <WritingNoteArt />
              <p className="text-lg font-semibold text-slate-50">Notes on systems, teams, and delivery.</p>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
