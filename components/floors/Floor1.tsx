import { Plan, Room, Stairs, Door } from "./parts";

const FONT = "var(--font-noto), sans-serif";

// PPT 1층 도면(슬라이드 4)의 배치를 그대로 옮긴 좌표
export default function Floor1() {
  return (
    <Plan w={620} h={332} label="1층 도면: 휴게 장소와 카페 글림(상단), 출입구, 포토존, 등록/안내 데스크, 화장실, 엘리베이터, 계단">
      <Room x={7} y={7} w={606} h={137} lines={["휴게 장소"]} size={26} />
      <Room x={83} y={100} w={114} h={42} lines={["카페 글림"]} tone="pop" size={22} />
      <Door x={7} y={34} w={44} h={74} vertical size={18} />
      <Door x={7} y={193} w={44} h={74} vertical size={18} />
      <Room x={89} y={155} w={101} h={56} lines={["ROAR", "포토존"]} tone="pop" size={20} />
      <Room x={273} y={145} w={222} h={66} />
      <Room x={542} y={145} w={68} h={32} lines={["화장실"]} size={20} />
      <rect x={569} y={209} width={42} height={58} rx={6} fill="#211a17" stroke="#4a3a32" strokeWidth={1.5} />
      <text x={590} y={238} textAnchor="middle" dominantBaseline="central" fontSize={26} fontWeight={900} fill="#ff6a3d" fontFamily={FONT}>E</text>
      <text x={612} y={277} textAnchor="end" dominantBaseline="central" fontSize={14} fill="#b9b3ad" fontFamily={FONT}>엘리베이터</text>
      <Room x={125} y={263} w={130} h={56} lines={["등록/안내", "데스크"]} tone="hot" size={20} />
      <Stairs x={8} y={289} w={67} h={36} size={20} />
      <Stairs x={542} y={290} w={69} h={36} size={20} />
    </Plan>
  );
}
