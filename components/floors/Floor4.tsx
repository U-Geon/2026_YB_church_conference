import { Plan, Room, Elevator } from "./parts";

export default function Floor4() {
  return (
    <Plan w={590} h={420} label="4층 집회장 도면: 무대, 선택 세션1·2 참가자석, 좌·우 계단, 엘리베이터, 출입문">
      <Room x={150} y={14} w={290} h={54} lines={["STAGE"]} tone="room" size={22} />
      <Room x={14} y={86} w={44} h={250} tone="room" />
      <Room x={72} y={86} w={104} h={250} tone="room" />
      <Room x={190} y={86} w={104} h={124} lines={["선택 세션1", "참가자석"]} tone="hot" size={17} />
      <Room x={190} y={216} w={104} h={120} tone="room" />
      <Room x={306} y={86} w={104} h={124} lines={["선택 세션2", "참가자석"]} tone="hot" size={17} />
      <Room x={306} y={216} w={104} h={120} tone="room" />
      <Room x={424} y={86} w={90} h={250} tone="room" />
      <text x={295} y={356} textAnchor="middle" fontSize={17} fontWeight={700} fill="#ff6a3d" fontFamily="var(--font-noto), sans-serif">▲ 입장 방향</text>
      <Room x={248} y={372} w={94} h={38} lines={["출입문"]} tone="util" size={18} />
      <Room x={14} y={338} w={110} h={72} lines={["좌측 계단", "선택세션·팝업"]} tone="util" size={16} />
      <Room x={466} y={338} w={110} h={72} lines={["우측 계단", "찬양집회 전용"]} tone="util" size={16} />
      <Elevator x={526} y={236} size={16} />
    </Plan>
  );
}
