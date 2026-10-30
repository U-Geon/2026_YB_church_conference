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
        <p className="mt-4 text-sm leading-relaxed text-muted">
          화장실은 1~3층 엘리베이터 좌측에 있습니다. 엘리베이터는 거동이 불편하신 분 등 꼭 필요한 분들께 양보해 주시고, 가급적 계단을 이용해 주세요.
        </p>
      </div>
    </header>
  );
}
