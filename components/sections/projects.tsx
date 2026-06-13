import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="section-shell pb-16">
      <SectionHeading
        title="Featured Projects"
        subtitle="Production financial products where I contributed Android engineering ownership, domain delivery, and release support."
      />
      <div className="space-y-4">
        {projects.map((project, index) => {
          return (
            <Reveal key={project.name} delay={index * 0.06}>
              <Card className="group grid gap-5 overflow-hidden p-5 transition hover:border-green/35 lg:grid-cols-[260px_1fr_360px_42px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line bg-panel">
                  <Image
                    src={project.image}
                    alt={`${project.name} project visual`}
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className={cn(
                      "object-cover transition duration-500 group-hover:scale-105",
                      project.imagePosition ?? "object-center"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
                </div>

                <div>
                  <p className={`text-sm font-semibold accent-${project.accent}`}>0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-50">{project.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted">{project.description}</p>
                  <p className="mt-4 text-sm font-medium leading-6 text-slate-200">{project.impact}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-green">
                      What I Worked On
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {project.workedOn.map((item) => (
                        <p key={item} className="flex gap-2 text-sm leading-5 text-slate-300">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-green">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="border-line bg-panel text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden place-items-center rounded-lg border border-line text-gold transition group-hover:border-gold/45 lg:grid"
                  aria-label={`Open ${project.name} on Play Store`}
                >
                  <ArrowUpRight className="size-5" />
                </a>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
