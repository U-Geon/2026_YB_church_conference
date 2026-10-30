import Section from "./Section";
import FloorLink from "./FloorLink";
import { POPUPS, POPUP_PLACES } from "@/lib/content";

export default function PopupGuide() {
  return (
    <Section id="popup" eyebrow="POP-UP ZONE" title="팝업존 운영 안내">
      <p className="mb-4 text-sm text-muted">1·2차 모두 2·3층 체험·게임존을 함께 운영합니다.</p>
      <div className="grid gap-3">
        {POPUPS.map((p) => (
          <div key={p.round} className="rounded-2xl border border-line bg-surface p-4">
            <p className="font-bold">{p.round}</p>
            <p className="grad-text font-display text-3xl tracking-wide">{p.time}</p>
            <p className="mt-1 text-sm text-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-8 mb-3 text-lg font-black">운영 위치</h3>
      <div className="grid gap-3">
        {POPUP_PLACES.map((p) => (
          <FloorLink key={p.floor} floor={p.floor} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
            <span className="grad flex h-14 w-14 shrink-0 items-center justify-center font-display text-2xl" style={{ borderRadius: "9999px 0 9999px 9999px" }}>
              {p.floor}
            </span>
            <span>
              <strong className="block">{p.title}</strong>
              {p.lines.map((l) => (
                <span key={l} className="block text-sm text-muted">{l}</span>
              ))}
            </span>
          </FloorLink>
        ))}
      </div>
      <p className="mt-4 rounded-xl bg-surface2 px-4 py-3 text-sm text-accent">
        등록/안내 데스크 12:00–16:30 운영 · 16:30 집회 시작 이후 안내 데스크로 전환
      </p>
    </Section>
  );
}
