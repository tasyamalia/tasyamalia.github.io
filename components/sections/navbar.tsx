"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/92 backdrop-blur-sm">
      <nav className="section-shell">
        <div className="flex min-h-20 items-center justify-between gap-5">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Tasya Amalia Salsabila"
            onClick={() => setIsOpen(false)}
          >
            <span className="grid size-11 place-items-center rounded-lg border border-green/40 bg-green/10 text-xl font-bold text-green">
              TAS
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 sm:block">
              Tasya Amalia Salsabila
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-slate-300 transition hover:text-green"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-line bg-card/50 text-slate-100 transition hover:border-green/60 hover:text-green lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="grid gap-2 border-t border-line py-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-card/60 hover:text-green"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
