import { PenLine } from "lucide-react";

export function WritingNoteArt() {
  return (
    <>
      <div
        className="absolute -right-20 top-8 size-48 rounded-full border border-purple/15"
      />
      <div
        className="absolute bottom-12 left-10 h-px w-40 bg-gradient-to-r from-gold/70 via-green/35 to-transparent"
      />
      <div>
        <PenLine className="mb-4 size-12 text-gold" />
      </div>
    </>
  );
}
