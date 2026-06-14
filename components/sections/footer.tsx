import { Send } from "lucide-react";
import { footerLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { FooterArt } from "@/components/footer-art";
import { Card } from "@/components/ui/card";
import { CopyEmailButton } from "@/components/copy-email-button";

export function Footer() {
  const email = "tasyaamaliasalsa@gmail.com";
  const emailHref = "mailto:tasyaamaliasalsa@gmail.com";

  return (
    <footer id="contact" className="section-shell pb-8">
      <Card className="relative grid overflow-hidden gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <FooterArt />
        <h2 className="relative z-10 max-w-xl text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
          Let&apos;s build something amazing <span className="text-green">together.</span>
        </h2>
        <div className="relative z-10">
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button key={link.label} asChild variant="outline">
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
            <Button asChild variant="gold">
              <a href={emailHref}>
                <Send className="size-4" />
                Let&apos;s Talk
              </a>
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted lg:justify-end">
            <span>Email me at</span>
            <a className="font-medium text-slate-200 transition hover:text-green" href={emailHref}>
              {email}
            </a>
            <CopyEmailButton email={email} />
          </div>
        </div>
      </Card>
      <p className="py-5 text-center text-xs text-muted">
        © 2026 Tasya Amalia Salsabila. All rights reserved.
      </p>
    </footer>
  );
}
