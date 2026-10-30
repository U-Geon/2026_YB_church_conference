import { Plan, Room, Stairs, Elevator, Door } from "./parts";

export default function Floor1() {
  return (
    <Plan w={540} h={340} label="1층 도면: 출입구, 포토존, 등록/안내 데스크, 카페 글림, 화장실, 엘리베이터, 계단">
      <Door x={2} y={28} w={44} h={90} vertical />
      <Door x={2} y={150} w={44} h={90} vertical />
      <Room x={80} y={36} w={160} h={64} lines={["카페 글림"]} tone="room" size={22} />
      <Room x={270} y={36} w={170} h={90} lines={["휴게 장소"]} tone="room" dashed size={22} />
      <Room x={80} y={140} w={130} h={80} lines={["ROAR", "포토존"]} tone="pop" size={22} />
      <Room x={110} y={262} w={200} h={64} lines={["등록/안내 데스크"]} tone="hot" size={21} />
      <Room x={448} y={36} w={84} h={52} lines={["화장실"]} tone="room" size={20} />
      <Elevator x={466} y={126} size={20} />
      <Stairs x={2} y={286} w={80} h={50} size={19} />
      <Stairs x={452} y={282} w={80} h={50} size={19} />
    </Plan>
  );
}
