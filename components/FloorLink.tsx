"use client";

import type { ReactNode } from "react";

export const SELECT_FLOOR_EVENT = "roar:select-floor";

/** 층별 안내로 이동하면서 해당 층 탭을 함께 활성화하는 앵커 */
export default function FloorLink({ floor, className, children }: { floor: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#floor"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(SELECT_FLOOR_EVENT, { detail: floor }))}
    >
      {children}
    </a>
  );
}
