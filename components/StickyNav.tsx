"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";

export default function StickyNav() {
  const [active, setActive] = useState<string>(NAV[0].id);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="섹션 바로가기"
      className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur"
      style={{ height: "var(--nav-h)", paddingTop: "env(safe-area-inset-top)" }}
    >
      <ul className="flex h-full items-center gap-1 overflow-x-auto px-3 [scrollbar-width:none] [&>li:first-child]:ml-auto [&>li:last-child]:mr-auto">
        {NAV.map((n) => (
          <li key={n.id} className="shrink-0">
            <a
              href={`#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={`block rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ${
                active === n.id ? "grad text-white" : "text-muted"
              }`}
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
