import type { ReactNode } from "react";

const FONT = "var(--font-noto), sans-serif";

type Tone = "room" | "hot" | "pop" | "util";

const TONES: Record<Tone, { fill: string; stroke: string; text: string }> = {
  room: { fill: "#2a211d", stroke: "#4a3a32", text: "#f7f4ef" },
  hot: { fill: "#ee2a24", stroke: "#ff6a3d", text: "#ffffff" },
  pop: { fill: "#4a2418", stroke: "#ff6a3d", text: "#ffb59c" },
  util: { fill: "#211a17", stroke: "#4a3a32", text: "#ff6a3d" },
};

export function Plan({ w, h, label, children }: { w: number; h: number; label: string; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="block h-auto w-full">
      <rect x={1} y={1} width={w - 2} height={h - 2} rx={10} fill="#171513" stroke="#4a3a32" strokeWidth={2} />
      {children}
    </svg>
  );
}

export function Room({
  x, y, w, h, lines = [], tone = "room", size = 18, dashed = false,
}: {
  x: number; y: number; w: number; h: number; lines?: string[]; tone?: Tone; size?: number; dashed?: boolean;
}) {
  const t = TONES[tone];
  const lh = size * 1.25;
  const top = y + h / 2 - ((lines.length - 1) * lh) / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={t.fill} stroke={t.stroke} strokeWidth={dashed ? 2 : 1.5} strokeDasharray={dashed ? "7 5" : undefined} />
      {lines.map((l, i) => (
        <text key={l} x={x + w / 2} y={top + i * lh} textAnchor="middle" dominantBaseline="central" fontSize={size} fontWeight={700} fill={t.text} fontFamily={FONT}>
          {l}
        </text>
      ))}
    </g>
  );
}

export const Stairs = (p: { x: number; y: number; w?: number; h?: number; size?: number }) => (
  <Room {...p} w={p.w ?? 70} h={p.h ?? 40} lines={["계단"]} tone="util" size={p.size ?? 17} />
);

export function Elevator({ x, y, size = 17 }: { x: number; y: number; size?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={46} height={58} rx={6} fill="#211a17" stroke="#4a3a32" strokeWidth={1.5} />
      <text x={x + 23} y={y + 29} textAnchor="middle" dominantBaseline="central" fontSize={size + 8} fontWeight={900} fill="#ff6a3d" fontFamily={FONT}>E</text>
      <text x={x + 23} y={y + 74} textAnchor="middle" dominantBaseline="central" fontSize={size - 2} fill="#b9b3ad" fontFamily={FONT}>엘리베이터</text>
    </g>
  );
}

export function Door({ x, y, w, h, vertical = false, size = 16 }: { x: number; y: number; w: number; h: number; vertical?: boolean; size?: number }) {
  const cx = x + w / 2, cy = y + h / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill="#ff6a3d" opacity={0.18} stroke="#ff6a3d" strokeWidth={1.5} />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={size} fontWeight={700} fill="#ff6a3d" fontFamily={FONT} transform={vertical ? `rotate(-90 ${cx} ${cy})` : undefined}>
        출입구
      </text>
    </g>
  );
}
