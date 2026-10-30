export const EVENT = {
  title: "ROAR",
  subtitle: "세상 앞에서 포효하라",
  date: "2026.11.14",
  weekday: "SAT",
  time: "12:00 – 20:30",
  venue: "인천영복교회",
  address: "인천 남동구 서창남로 16-20",
};

export const OPEN_CHAT_URL = "https://open.kakao.com/o/g5vQcBLi";

export const NAV = [
  { id: "info", label: "행사" },
  { id: "schedule", label: "일정" },
  { id: "floor", label: "층별 안내" },
  { id: "popup", label: "팝업" },
  { id: "contact", label: "문의" },
] as const;

export const SCHEDULE = [
  { time: "12:00", title: "등록 데스크 · 행사장 오픈", note: "1차 팝업 운영 (~13:30, 2~3층 팝업존)" },
  { time: "13:30", title: "오프닝", note: "개회 및 행사 안내" },
  { time: "14:00", title: "선택 세션", note: "신청한 선택 강의에 참여 (~15:30)" },
  { time: "15:30", title: "2차 팝업 · 집회장 입장", note: "팝업 ~16:10 · 집회장 입장 시작" },
  { time: "16:30", title: "저녁 집회", note: "찬양 집회 및 예배 · 등록 마감" },
  { time: "19:30", title: "예수토랑", note: "식사와 교제" },
  { time: "20:30", title: "공식 종료", note: "귀가 안내" },
];

export const SESSIONS = [
  {
    key: "A",
    tag: "진로 · 취업",
    name: "이준희 대표",
    role: "면접왕 이형",
    topic: "크리스천 청년의 진로",
    desc: "진로와 취업을 준비하는 청년을 위한 강의",
    img: "/img/speaker-lee.png",
  },
  {
    key: "B",
    tag: "성경적 재정원리",
    name: "신이철 대표",
    role: "",
    topic: "성경적 재정원리",
    desc: "성경적 관점으로 살펴보는 재정 원리",
    img: "/img/speaker-shin.png",
  },
];

export const EVENING = {
  speaker: { name: "임형규 목사", role: "라이트하우스 서울숲 담임목사", img: "/img/evening-1.png" },
  worship: { name: "위클레시아", role: "찬양", img: "/img/evening-2.png" },
  timetable: [
    { time: "16:30 ~ 17:40", title: "찬양 집회" },
    { time: "17:40 ~ 19:10", title: "설교 및 기도" },
    { time: "19:10 ~ 19:20", title: "셀레브레이션" },
    { time: "19:20 ~ 19:30", title: "마무리 인사 및 축도" },
  ],
};

export const FLOORS = [
  {
    id: "1F",
    title: "1층 · 등록 / 안내",
    notes: [
      { h: "등록/안내 데스크", p: "12:00–16:30 운영. 16:30 집회 시작 이후 안내 데스크로 전환됩니다." },
      { h: "글림 카페", p: "1층 글림 카페에서 휴식 공간을 제공합니다." },
      { h: "시설", p: "화장실은 오른쪽 상단에 있습니다. 엘리베이터는 필요 시 이용해 주세요." },
    ],
  },
  {
    id: "2F",
    title: "2층 · 강의실 / 게임 팝업존",
    notes: [
      { h: "선택 세션", p: "세션별 강의실은 등록 내역과 현장 표지에서 확인해 주세요." },
      { h: "팝업존 (게임)", p: "2층 중앙 홀에서 운영합니다." },
    ],
  },
  {
    id: "3F",
    title: "3층 · 강의실 / 체험·게임 팝업존",
    notes: [
      { h: "선택 세션", p: "세션별 강의실은 등록 내역과 현장 표지에서 확인해 주세요." },
      { h: "팝업존", p: "체험: 3층 중앙 룸 · 게임: 3층 중앙 홀" },
    ],
    notice: "재고 소진 시 조기 마감될 수 있습니다",
  },
  {
    id: "4F",
    title: "4층 · 집회장",
    notes: [
      { h: "입장 시간", p: "15:30부터 입장 시작. 안내팀의 안내에 따라 왼쪽 계단에서 이동해 주세요." },
      { h: "왼쪽 계단", p: "오전 선택세션 및 팝업 프로그램 이용자 전용" },
      { h: "오른쪽 계단 (엘리베이터 옆)", p: "찬양집회만 신청한 참석자 전용 · 재입장 시에도 이용해 주세요." },
      { h: "재입장", p: "확인을 위해 입장 스탬프를 보여주세요!" },
      { h: "좌석", p: "앞자리부터 배정합니다. 선택 세션 참가자는 지정 좌석이 제공됩니다. 단체는 신청 인원 모두 함께 입장해 주세요." },
    ],
  },
] as const;

export const POPUPS = [
  {
    round: "1차 팝업",
    time: "12:00 – 13:30",
    desc: "행사 시작과 함께 오픈 · 13:30 선택 세션 전 정리",
  },
  {
    round: "2차 팝업",
    time: "15:30 – 16:10",
    desc: "선택 세션 후 오픈 · 16:00 집회 시작 전 정리",
  },
];

export const POPUP_PLACES = [
  { floor: "2F", title: "팝업존 (게임)", lines: ["게임 : 2층 중앙 홀"] },
  { floor: "3F", title: "팝업존 (체험) · (게임)", lines: ["체험 : 3층 중앙 룸", "게임 : 3층 중앙 홀"] },
];
