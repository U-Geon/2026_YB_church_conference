import Image from "next/image";
import Section from "./Section";
import { SCHEDULE, SESSIONS, EVENING } from "@/lib/content";

export default function Schedule() {
  return (
    <Section id="schedule" eyebrow="SCHEDULE" title="오늘의 일정">
      <ol className="relative ml-2 border-l-2 border-line">
        {SCHEDULE.map((s) => (
          <li key={s.time} className="relative pb-6 pl-5 last:pb-0">
            <span className="grad absolute -left-[7px] top-1.5 h-3 w-3 rounded-full" />
            <p className="font-display text-xl tracking-wide text-accent">{s.time}</p>
            <p className="font-bold">{s.title}</p>
            <p className="text-sm text-muted">{s.note}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-12 mb-4 text-lg font-black">선택 세션 <span className="text-sm font-medium text-muted">14:00–15:30 · 신청한 강의에 참여</span></h3>
      <div className="grid grid-cols-2 gap-3">
        {SESSIONS.map((s) => (
          <article key={s.key} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <Image src={s.img} alt={`${s.name} 강사`} width={460} height={490} className="aspect-[4/4.2] w-full object-cover object-top" />
            <div className="p-3">
              <p className="text-xs font-bold text-accent">세션 {s.key} · {s.tag}</p>
              <p className="mt-0.5 font-black">{s.name}</p>
              {s.role && <p className="text-xs text-muted">{s.role}</p>}
              <p className="mt-1.5 text-xs leading-snug text-muted">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">층·강의실 배정은 등록 내역과 현장 안내 표지에서 확인해 주세요.</p>

      <h3 className="mt-12 mb-4 text-lg font-black">저녁 집회 <span className="text-sm font-medium text-muted">16:30 · 4층 집회장</span></h3>
      <div className="flex gap-3">
        {[EVENING.speaker, EVENING.worship].map((p) => (
          <div key={p.name} className="flex-1 text-center">
            <Image src={p.img} alt={p.name} width={300} height={300} className="aspect-square w-full object-cover" style={{ borderRadius: "9999px 0 9999px 9999px" }} />
            <p className="mt-2 font-black">{p.name}</p>
            <p className="text-xs text-muted">{p.role}</p>
          </div>
        ))}
      </div>
      <ul className="mt-5 divide-y divide-line rounded-2xl border border-line bg-surface">
        {EVENING.timetable.map((t) => (
          <li key={t.time} className="flex items-center justify-between px-4 py-3 text-sm">
            <span className="font-display tracking-wide text-accent">{t.time}</span>
            <span className="font-bold">{t.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
