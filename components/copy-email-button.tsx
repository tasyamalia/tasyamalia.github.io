"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-grid size-8 place-items-center rounded-lg border border-line bg-card/55 text-slate-300 transition hover:border-green/50 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
      aria-label={copied ? "Email address copied" : "Copy email address"}
      title={copied ? "Copied" : "Copy email"}
    >
      <Icon className="size-4" />
    </button>
  );
}
