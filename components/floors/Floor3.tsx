import { Plan, Room, Stairs, Label, ElevatorSide } from "./parts";

// PPT 3층 도면 배치 기준 좌표
export default function Floor3() {
  return (
    <Plan w={620} h={524} label="3층 도면: 3층 강의실, 팝업존(체험), 중앙 홀 팝업존(게임), 화장실, 엘리베이터, 계단">
      <Room x={6} y={7} w={223} h={233} lines={["3층 강의실"]} tone="edge" size={28} />
      <Room x={230} y={7} w={77} h={84} />
      <Room x={312} y={7} w={171} h={84} />
      <Room x={312} y={90} w={171} h={234} lines={["팝업존", "(체험)"]} size={22} />
      <Room x={527} y={7} w={87} h={108} lines={["화장실"]} size={20} />
      <Room x={7} y={241} w={74} h={84} />
      <ElevatorSide x={561} y={331} w={53} h={82} labelX={578} labelY={385} />
      <Label x={310} y={401} lines={["팝업존", "(게임)"]} size={22} />
      <Stairs x={8} y={468} w={87} h={51} size={20} />
      <Stairs x={527} y={467} w={87} h={51} size={20} />
    </Plan>
  );
}
