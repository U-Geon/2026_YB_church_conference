import Image from "next/image";
import { EVENT } from "@/lib/content";

export default function Hero() {
  return (
    <header id="info" className="relative">
      <Image src="/img/hero.png" alt="ROAR — 세상 앞에서 포효하라, wecclesia × 영복교회" width={960} height={540} priority className="h-auto w-full" />
      <div className="px-5 pt-6 pb-4">
        <p className="font-display text-xs tracking-[0.25em] text-accent">YOUTH CONFERENCE 2026</p>
        <h1 className="mt-1 text-[1.9rem] font-black leading-tight">
          <span className="grad-text">{EVENT.subtitle}</span>
        </h1>
        <dl className="mt-5 space-y-3 rounded-2xl border border-line bg-surface p-4 text-[0.95rem]">
          <div className="flex gap-3">
            <dt className="w-12 shrink-0 font-bold text-accent">일시</dt>
            <dd>{EVENT.date} ({EVENT.weekday}) {EVENT.time}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-12 shrink-0 font-bold text-accent">장소</dt>
            <dd>
              <strong>{EVENT.venue}</strong>
              <br />
              <span className="text-muted">{EVENT.address}</span>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
