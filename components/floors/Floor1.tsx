import { Plan, Room, Stairs, Door } from "./parts";

const FONT = "var(--font-noto), sans-serif";

// PPT 1층 도면(슬라이드 4)의 배치를 그대로 옮긴 좌표
export default function Floor1() {
  return (
    <Plan w={620} h={332} label="1층 도면: 휴게 장소와 카페 글림(상단), 출입구(좌측 2곳, 휴게 장소 하단 1곳), 포토존, 등록/안내 데스크, 화장실, 엘리베이터, 계단">
      <Room x={7} y={7} w={607} h={138} lines={["휴게 장소"]} size={26} />
      <Room x={83} y={100} w={114} h={43} lines={["카페 글림"]} tone="pop" size={22} />
      <Door x={7} y={34} w={44} h={74} vertical size={18} />
      <Door x={7} y={193} w={44} h={74} vertical size={18} />
      <Door x={221} y={135} w={45} h={19} size={12} />
      <Room x={89} y={156} w={102} h={56} lines={["ROAR", "포토존"]} tone="pop" size={20} />
      <Room x={291} y={146} w={225} h={67} />
      <Room x={543} y={146} w={69} h={32} lines={["화장실"]} size={20} />
      <rect x={576} y={210} width={37} height={57} rx={6} fill="#211a17" stroke="#4a3a32" strokeWidth={1.5} />
      <text x={594} y={229} textAnchor="middle" dominantBaseline="central" fontSize={24} fontWeight={900} fill="#ff6a3d" fontFamily={FONT}>E</text>
      <text x={578} y={250} textAnchor="middle" dominantBaseline="central" fontSize={14} fill="#b9b3ad" fontFamily={FONT}>엘리베이터</text>
      <Room x={133} y={263} w={115} h={52} lines={["등록/안내", "데스크"]} tone="hot" size={20} />
      <Stairs x={8} y={290} w={67} h={35} size={20} />
      <Stairs x={544} y={291} w={69} h={35} size={20} />
    </Plan>
  );
}
