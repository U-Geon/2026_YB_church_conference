"use client";

import { useState } from "react";
import Section from "./Section";
import Floor1 from "./floors/Floor1";
import Floor2 from "./floors/Floor2";
import Floor3 from "./floors/Floor3";
import Floor4 from "./floors/Floor4";
import { FLOORS } from "@/lib/content";

const PLANS = { "1F": Floor1, "2F": Floor2, "3F": Floor3, "4F": Floor4 } as const;

export default function FloorGuide() {
  const [id, setId] = useState<(typeof FLOORS)[number]["id"]>("1F");
  const floor = FLOORS.find((f) => f.id === id)!;
  const Plan = PLANS[id];

  return (
    <Section id="floor" eyebrow="FLOOR GUIDE" title="층별 안내도">
      <div role="tablist" aria-label="층 선택" className="mb-4 grid grid-cols-4 gap-2">
        {FLOORS.map((f) => (
          <button
            key={f.id}
            role="tab"
            id={`tab-${f.id}`}
            aria-selected={id === f.id}
            aria-controls="floor-panel"
            onClick={() => setId(f.id)}
            className={`rounded-xl py-2.5 font-display text-xl tracking-wide transition-colors ${
              id === f.id ? "grad text-white" : "border border-line bg-surface text-muted"
            }`}
          >
            {f.id}
          </button>
        ))}
      </div>
      <div role="tabpanel" id="floor-panel" aria-labelledby={`tab-${id}`}>
        <h3 className="mb-3 font-black">{floor.title}</h3>
        <Plan />
        <dl className="mt-5 space-y-3">
          {floor.notes.map((n) => (
            <div key={n.h} className="border-l-4 border-brand bg-surface px-4 py-3">
              <dt className="text-sm font-bold text-accent">{n.h}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed">{n.p}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
