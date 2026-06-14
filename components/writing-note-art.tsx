import { PenLine } from "lucide-react";

export function WritingNoteArt() {
  return (
    <>
      <div
        className="art-ring-reverse absolute -right-20 top-8 size-48 rounded-full border border-purple/15"
      />
      <div className="art-soft-float">
        <PenLine className="mb-4 size-12 text-gold" />
      </div>
    </>
  );
}
