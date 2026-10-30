import type { ReactNode } from "react";

export default function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="px-5 py-12">
      <p className="font-display text-sm tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-1 mb-6 text-[1.7rem] font-black leading-tight">{title}</h2>
      {children}
    </section>
  );
}
