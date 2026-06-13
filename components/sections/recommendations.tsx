"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Linkedin, Pause, Quote } from "lucide-react";
import { recommendations } from "@/data/portfolio";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const recommendationsUrl =
  "https://www.linkedin.com/in/tasya-amalia-salsabila/details/recommendations/?detailScreenTabIndex=0";

const accentBg = {
  green: "bg-green/15",
  gold: "bg-gold/15",
  blue: "bg-blue/15",
  purple: "bg-purple/15"
};

function RecommendationCard({ item }: { item: (typeof recommendations)[number] }) {
  return (
    <Card className="h-full border-line bg-card/82 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)] transition hover:border-green/35 hover:bg-card/95 sm:p-6">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className={`grid size-11 shrink-0 place-items-center rounded-lg ${accentBg[item.accent]}`}>
            <Quote className={`size-5 accent-${item.accent}`} />
          </div>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-lg border border-line text-slate-300 transition hover:border-blue/45 hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label={`Open ${item.name}'s recommendation on LinkedIn`}
            >
              <Linkedin className="size-4" />
            </a>
          ) : null}
        </div>
        <p className="line-clamp-6 text-sm leading-6 text-slate-300">"{item.quote}"</p>
        <div className="mt-auto pt-5">
          <p className="font-semibold text-slate-50">{item.name}</p>
          <p className="mt-1 text-sm leading-5 text-muted">{item.role}</p>
          <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.16em] accent-${item.accent}`}>
            {item.relationship}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function Recommendations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!emblaApi || intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
  }, [emblaApi]);

  const pauseAutoplay = useCallback(() => {
    setIsPaused(true);
    stopAutoplay();
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, [stopAutoplay]);

  const resumeAutoplay = useCallback(
    (delay = 1600) => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        startAutoplay();
      }, delay);
    },
    [startAutoplay]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    pauseAutoplay();
    emblaApi.scrollPrev();
    resumeAutoplay();
  }, [emblaApi, pauseAutoplay, resumeAutoplay]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    pauseAutoplay();
    emblaApi.scrollNext();
    resumeAutoplay();
  }, [emblaApi, pauseAutoplay, resumeAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      pauseAutoplay();
      emblaApi.scrollTo(index);
      resumeAutoplay();
    },
    [emblaApi, pauseAutoplay, resumeAutoplay]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on("pointerDown", pauseAutoplay);
    emblaApi.on("pointerUp", () => resumeAutoplay());

    startAutoplay();

    return () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", pauseAutoplay);
    };
  }, [emblaApi, onSelect, pauseAutoplay, resumeAutoplay, startAutoplay, stopAutoplay]);

  return (
    <section className="section-shell pb-16" aria-label="Recommendations carousel">
      <Reveal>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="Recommendations"
            subtitle="Trusted social proof from leaders and teammates who worked directly with me."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="grid size-10 place-items-center rounded-lg border border-line bg-card/70 text-slate-100 transition hover:border-green/55 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label="Show previous recommendation"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="grid size-10 place-items-center rounded-lg border border-line bg-card/70 text-slate-100 transition hover:border-green/55 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label="Show next recommendation"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Professional recommendations"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={() => resumeAutoplay()}
          onFocus={pauseAutoplay}
          onBlur={() => resumeAutoplay()}
        >
          <div className="-ml-4 flex touch-pan-y">
            {recommendations.map((item, index) => (
              <div
                key={item.name}
                className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${recommendations.length}`}
              >
                <RecommendationCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-label="Recommendation slide controls">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green ${
                  selectedIndex === index ? "w-8 bg-green" : "w-2.5 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Go to recommendation slide ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-muted" aria-live="polite">
              <Pause className="size-3.5" />
              {isPaused ? "Paused" : "Auto-moving"}
            </span>
            <a
              href={recommendationsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green transition hover:text-green/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
            >
              View all on LinkedIn <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
