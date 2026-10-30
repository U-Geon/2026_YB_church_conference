import { Plan, Room } from "./parts";

const FONT = "var(--font-noto), sans-serif";
const ARROW = "#e0522f";

// PPT 4층 집회장 좌석(슬라이드 10)과 입장 동선(슬라이드 9) 도면을 하나로 합친 좌표
export default function Floor4() {
  return (
    <Plan w={620} h={500} label="4층 도면: 상단 집회장(무대, 선택 세션1·2 참가자석), 하단 로비(출입문, 입장 방향, 좌·우 계단, 엘리베이터)">
      <defs>
        <marker id="f4-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={ARROW} />
        </marker>
      </defs>

      {/* 집회장 */}
      <Room x={79} y={20} w={381} h={49} lines={["Stage"]} size={24} />
      <Room x={488} y={20} w={99} h={49} />
      <Room x={19} y={77} w={43} h={235} />
      <Room x={79} y={77} w={104} h={234} />
      <Room x={204} y={77} w={116} h={116} lines={["선택 세션1", "참가자석"]} tone="edge" size={17} />
      <Room x={204} y={193} w={116} h={116} />
      <Room x={344} y={77} w={116} h={116} lines={["선택 세션2", "참가자석"]} tone="edge" size={17} />
      <Room x={344} y={194} w={116} h={119} />
      <Room x={488} y={77} w={99} h={235} />

      {/* 집회장/로비 경계와 출입문 */}
      <line x1={7} y1={347} x2={613} y2={347} stroke="#8a7a70" strokeWidth={2} />
      <g fill="none" stroke="#a67f74" strokeWidth={2}>
        <path d="M284 348 V377 M286 377 A29 29 0 0 1 315 348" />
        <path d="M346 348 V377 M344 377 A29 29 0 0 0 315 348" />
      </g>
      <text x={315} y={393} textAnchor="middle" dominantBaseline="central" fontSize={13} fill="#b9b3ad" fontFamily={FONT}>출입문</text>

      {/* 로비 */}
      <Room x={7} y={349} w={100} h={43} />
      <Room x={569} y={353} w={44} h={62} lines={["E"]} tone="util" size={22} />
      <Room x={7} y={414} w={100} h={79} lines={["좌측", "계단"]} tone="edge" size={20} />
      <Room x={512} y={414} w={101} h={79} lines={["우측", "계단"]} tone="edge" size={20} />

      {/* 입장 방향: 좌측은 단방향, 우측은 양방향(입장·재입장) */}
      <line x1={165} y1={451} x2={282} y2={407} stroke={ARROW} strokeWidth={2} markerEnd="url(#f4-arrow)" />
      <line x1={346} y1={407} x2={465} y2={443} stroke={ARROW} strokeWidth={2} markerStart="url(#f4-arrow)" markerEnd="url(#f4-arrow)" />
      <text x={310} y={445} textAnchor="middle" dominantBaseline="central" fontSize={16} fontWeight={700} fill="#ff6a3d" fontFamily={FONT}>입장 방향</text>
    </Plan>
  );
}
