import { Plan, Room, Stairs, Label, ElevatorSide } from "./parts";

// PPT 2층 도면 배치 기준 좌표
export default function Floor2() {
  return (
    <Plan w={621} h={520} label="2층 도면: 2층 강의실, 화장실, 엘리베이터, 계단, 중앙 홀 팝업존(게임)">
      <Room x={6} y={8} w={229} h={314} lines={["2층 강의실"]} tone="edge" size={28} />
      <Room x={295} y={8} w={172} h={95} />
      <Room x={295} y={103} w={172} h={83} />
      <Room x={295} y={186} w={172} h={121} />
      <Room x={527} y={6} w={87} h={107} lines={["화장실"]} size={20} />
      <ElevatorSide x={560} y={321} w={54} h={82} labelX={578} labelY={376} />
      <Label x={309} y={415} lines={["팝업존", "(게임)"]} size={22} />
      <Stairs x={8} y={463} w={88} h={52} size={20} />
      <Stairs x={526} y={463} w={88} h={52} size={20} />
    </Plan>
  );
}
