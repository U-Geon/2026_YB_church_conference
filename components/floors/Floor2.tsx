import { Plan, Room, Stairs, Elevator } from "./parts";

export default function Floor2() {
  return (
    <Plan w={375} h={320} label="2층 도면: 강의실, 게임 팝업존, 화장실, 엘리베이터, 계단">
      <Room x={8} y={8} w={150} h={190} lines={["2층", "강의실"]} tone="room" size={20} />
      <Room x={176} y={8} w={110} h={186} tone="room" />
      <Room x={296} y={8} w={72} h={70} lines={["화장실"]} tone="room" size={17} />
      <Room x={92} y={214} w={180} h={64} lines={["팝업존 (게임)", "중앙 홀"]} tone="pop" dashed size={18} />
      <Elevator x={318} y={110} size={16} />
      <Stairs x={8} y={276} w={64} h={38} size={16} />
      <Stairs x={302} y={276} w={64} h={38} size={16} />
    </Plan>
  );
}
