import { ArrowRight, CheckCircle2, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroArt } from "@/components/hero-art";
import { Reveal } from "@/components/motion";
import { metrics, techChips } from "@/data/portfolio";

export function Hero() {
  const heroMetrics = metrics;
  const whatIBring = [
    "Build production fintech and banking systems used at scale",
    "Deliver critical journeys across onboarding, authentication, payments, lending, investment, and security",
    "Own features end-to-end from discovery and technical planning through release",
    "Collaborate across Product, Backend, QA, Design, and stakeholders",
    "Support reliability, maintainability, and long-term engineering quality"
  ];

  return (
    <section id="home" className="section-shell relative isolate grid gap-8 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-16">
      <HeroArt />
      <Reveal className="relative z-10 flex flex-col justify-center">
        <p className="mb-4 text-base font-semibold text-green">Hi, I&apos;m</p>
        <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-normal text-slate-50 sm:text-6xl lg:text-7xl">
          Tasya Amalia <span className="text-green">Salsabila</span><span className="text-gold">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Android Engineer with 5+ years of experience building production fintech and banking systems, delivering
          critical user journeys across investment, lending, onboarding, authentication, payments, and security.
        </p>
        <div className="mt-7 max-w-2xl rounded-lg border border-line bg-card/45 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green">What I bring</p>
          <div className="mt-4 grid gap-3">
            {whatIBring.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">
              View My Work <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">
              <Mail className="size-4" /> Contact Me
            </a>
          </Button>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {techChips.map((chip) => (
            <Badge key={chip}>{chip}</Badge>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12} className="relative z-10 flex items-center">
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Card className="p-6">
            <div className="flex items-center gap-3 text-gold">
              <MapPin className="size-5" />
              <span className="text-sm font-semibold text-slate-100">Indonesia</span>
            </div>
            <div className="my-5 h-px bg-line" />
            <p className="text-sm text-muted">Available For</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Remote", "Relocation with support", "Android roles"].map((item) => (
                <Badge key={item} className="border-green/45 bg-green/5">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 text-gold">
              <ShieldCheck className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Proof Snapshot</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-line bg-panel/60 p-4">
                  <p className={`text-2xl font-bold accent-${metric.accent}`}>{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Reveal>
    </section>
  );
}
