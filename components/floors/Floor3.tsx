import { Plan, Room, Stairs, Elevator } from "./parts";

export default function Floor3() {
  return (
    <Plan w={375} h={320} label="3층 도면: 강의실, 체험·게임 팝업존, 화장실, 엘리베이터, 계단">
      <Room x={8} y={8} w={140} h={150} lines={["3층", "강의실"]} tone="room" size={20} />
      <Room x={166} y={8} w={118} h={170} lines={["팝업존", "(체험)", "중앙 룸"]} tone="pop" size={17} dashed />
      <Room x={296} y={8} w={72} h={70} lines={["화장실"]} tone="room" size={17} />
      <Room x={92} y={206} w={180} h={64} lines={["팝업존 (게임)", "중앙 홀"]} tone="pop" dashed size={18} />
      <Elevator x={318} y={110} size={16} />
      <Stairs x={8} y={276} w={64} h={38} size={16} />
      <Stairs x={302} y={276} w={64} h={38} size={16} />
    </Plan>
  );
}
