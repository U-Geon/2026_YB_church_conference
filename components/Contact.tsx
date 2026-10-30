import Section from "./Section";
import { OPEN_CHAT_URL } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="CONTACT" title="문의사항">
      <p className="mb-5 text-sm leading-relaxed text-muted">
        행사 중 궁금한 점이나 도움이 필요하시면 청년 컨퍼런스 ROAR 오픈채팅방으로 문의해 주세요.
      </p>
      <a
        href={OPEN_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="grad block rounded-2xl py-4 text-center text-lg font-black text-white shadow-[0_0_30px_rgba(238,42,36,0.35)] active:scale-[0.98]"
      >
        오픈채팅방 입장하기
      </a>
      <p className="mt-3 break-all text-center text-xs text-muted">{OPEN_CHAT_URL}</p>
      <footer className="mt-14 border-t border-line pt-6 pb-10 text-center text-xs text-muted">
        <p className="font-display text-base tracking-[0.2em] text-fg">wecclesia × 영복교회</p>
        <p className="mt-1">ROAR 청년 컨퍼런스 · 2026.11.14 (SAT)</p>
      </footer>
    </Section>
  );
}
