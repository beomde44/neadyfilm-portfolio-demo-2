export const siteEmail = "neadyfilm0722@naver.com";
export const instagramUrl = "https://www.instagram.com/neadyfilm/";
export const gearInUrl = "https://www.youtube.com/@Gear-In";

export const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const archiveNavLinks = [
  { href: "/#works", label: "Works" },
  { href: "/archive", label: "Archive", active: true },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export const filterButtons = [
  { id: "all", label: "전체" },
  { id: "documentary", label: "미니 다큐" },
  { id: "dance", label: "댄스필름" },
  { id: "performance", label: "퍼포먼스" },
  { id: "event", label: "행사 스케치" },
  { id: "review", label: "리뷰 채널" },
];

export const archiveFilters = [
  { id: "all", label: "전체" },
  { id: "social", label: "소셜미디어" },
  { id: "brand", label: "브랜드 / 홍보" },
  { id: "space", label: "공간 / 레스토랑" },
  { id: "external", label: "외부 링크" },
];

export const projects = [
  {
    category: "documentary",
    featured: true,
    image: "/assets/kosmos-project-2026.webp",
    imageAlt: "Kosmos Project thumbnail",
    href: "https://youtu.be/xU5_6JX4TA0",
    type: "Mini Documentary / 2026",
    title: "Kosmos Project",
    description:
      "코스모스 프로젝트는 “art, world and we”라는 슬로건 아래 다양한 아티스트들의 세계관과 예술 철학을 기록하는 인터뷰 형식의 미니 다큐멘터리 프로젝트입니다.",
    role: "촬영 / 조명 / 색보정 / 편집",
    release: "Public",
    actions: [{ label: "영상 보기", href: "https://youtu.be/xU5_6JX4TA0" }],
  },
  {
    category: "dance",
    image: "/assets/dance-film-01.webp",
    imageAlt: "1min Improvisation thumbnail",
    href: "https://youtu.be/qmvkKhKLPbU?si=xffRqaEOJKO_Zze6",
    type: "Dance Film / 2026",
    title: "1min Improvisation",
    description:
      "최소한의 편집점을 제외한 모든 과정이 즉흥적 퍼포먼스로 진행된 작업입니다. 퍼포머와 촬영자가 현장에서 함께 반응하며 만든 댄스필름입니다.",
    role: "촬영 / 편집 / 색보정",
    release: "Public",
    actions: [{ label: "영상 보기", href: "https://youtu.be/qmvkKhKLPbU?si=xffRqaEOJKO_Zze6" }],
  },
  {
    category: "dance",
    image: "/assets/dance-film-02.webp",
    imageAlt: "Circle of life - 순환 thumbnail",
    href: "https://youtu.be/_Hav2WOc-qg",
    type: "Dance Film / 2025",
    title: "Circle of life - 순환",
    description:
      "무용 퍼포먼스가 지닌 현장성과 에너지, 그리고 무용수들의 움직임과 감정을 영상 언어로 재해석하여 담아낸 공연 기반 댄스필름입니다.",
    role: "촬영 / 편집 / 색보정",
    release: "Public",
    actions: [{ label: "영상 보기", href: "https://youtu.be/_Hav2WOc-qg" }],
  },
  {
    category: "event",
    image: "/assets/event-sketch-01.webp",
    imageAlt: "ASDFxHousetrain thumbnail",
    href: "https://youtu.be/kEqJIk01OhU",
    type: "Event Sketch / 2025",
    title: "ASDFxHousetrain",
    description: "ASDF와 Housetrain의 퍼포먼스, 파티, 워크샵 나잇을 기록한 행사 스케치 영상입니다.",
    role: "촬영 / 편집 / 색보정",
    release: "Public",
    actions: [{ label: "영상 보기", href: "https://youtu.be/kEqJIk01OhU" }],
  },
  {
    category: "event",
    image: "/assets/event-sketch-02.webp",
    imageAlt: "스마트 저축은행 체육대회 thumbnail",
    href: "https://youtu.be/yyKmHvNNsEY",
    type: "Event Sketch / 2026",
    title: "스마트 저축은행 체육대회",
    description: "스마트 저축은행 체육대회의 현장 분위기와 주요 순간을 기록한 행사 스케치 영상입니다.",
    role: "촬영 / 편집 / 색보정",
    release: "Public",
    actions: [{ label: "영상 보기", href: "https://youtu.be/yyKmHvNNsEY" }],
  },
  {
    category: "performance",
    image: "/assets/maiskind-project.webp",
    imageAlt: "Maiskind Project thumbnail",
    href: "https://youtu.be/xLYul6q663M",
    type: "Performance Project Video / 2021",
    title: "Maiskind Project",
    description: "독일에서 진행된 Maiskind Project의 퍼포먼스 단편영화 중 한 파트입니다.",
    role: "촬영 / 편집 / 색보정",
    release: "Public",
    actions: [
      { label: "영상 보기", href: "https://youtu.be/xLYul6q663M" },
      { label: "외부 페이지", href: "https://www.maiskind.com" },
    ],
  },
  {
    category: "review",
    image: "/assets/gear-in-youtube.webp",
    imageAlt: "Gear-in Youtube thumbnail",
    href: "https://youtu.be/pjrMcWE4SvY",
    type: "Review Channel / 2026",
    title: "Gear-in Youtube",
    description: "다양한 장비를 실사용 위주로 리뷰해보는 자체 유튜브 채널입니다.",
    role: "촬영 / 편집 / 색보정",
    release: "Public",
    actions: [
      { label: "영상 보기", href: "https://youtu.be/pjrMcWE4SvY" },
      { label: "리뷰 채널", href: gearInUrl },
    ],
  },
];

export const services = [
  ["01", "Dance Film", "움직임, 신체, 공간의 관계를 중심으로 한 댄스필름과 무브먼트 기반 영상을 제작합니다."],
  [
    "02",
    "Mini Documentary / Interview",
    "아티스트, 창작자, 브랜드의 세계관과 작업 과정을 담는 미니 다큐멘터리와 인터뷰 콘텐츠를 제작합니다.",
  ],
  ["03", "Performance Video", "공연, 쇼케이스, 라이브클립, 무대 기반 영상을 현장의 리듬과 에너지에 맞춰 제작합니다."],
  ["04", "Music Video", "음악의 분위기와 아티스트의 이미지를 시각적으로 확장하는 뮤직비디오를 제작합니다."],
  ["05", "Event Sketch", "행사의 단순 기록을 넘어, 현장의 분위기와 주요 순간을 하나의 흐름으로 구성합니다."],
  ["06", "Social / Brand Content", "아트비디오의 감도를 바탕으로 브랜드 홍보영상, 소셜미디어 콘텐츠, 숏폼 영상을 제작합니다."],
  [
    "07",
    "Gear / Visual Review",
    "Gear-in 리뷰 채널을 통해 카메라, 렌즈, 영상 장비를 실제 촬영 환경에서 비주얼 중심으로 리뷰합니다.",
  ],
];

export const processSteps = [
  ["01", "Discover", "프로젝트의 목적, 분위기, 인물, 음악, 움직임의 방향을 함께 정리합니다."],
  ["02", "Plan", "촬영 구성, 무드, 장소, 인터뷰 질문, 장면의 흐름을 설계합니다."],
  ["03", "Shoot", "프로젝트의 성격에 맞는 장비와 방식으로 실사 기반의 이미지를 촬영합니다."],
  ["04", "Edit", "편집, 색보정, 사운드, 자막을 통해 영상의 리듬과 감도를 완성합니다."],
  ["05", "Deliver", "상영, 유튜브, 인스타그램, 행사, 브랜드 채널 등 사용 목적에 맞는 포맷으로 납품합니다."],
];

export const heroTags = ["Dance Film", "Mini Documentary", "Interview", "Performance", "Gear-in"];

export const archiveIntroCards = [
  ["01", "Social Media Content", "릴스, 숏폼, 인스타그램 운영 콘텐츠처럼 지속적으로 브랜드의 감도를 쌓는 작업입니다."],
  ["02", "Brand / Promotion", "브랜드 홍보영상, 제품 비주얼, 공간 무드 필름 등 상업 목적의 영상 작업입니다."],
  ["03", "External / Portrait", "소유권이 외부에 있는 프로젝트는 자체 업로드 대신 외부 페이지로 연결할 수 있습니다."],
];

export const archiveProjects = [
  {
    category: "social",
    image: "/assets/archive-social.svg",
    imageAlt: "Social Content Series thumbnail",
    type: "Social Media Content",
    title: "Social Content Series",
    description: "브랜드의 리듬과 분위기를 지속적으로 쌓아가는 숏폼 및 인스타그램 콘텐츠입니다.",
    scope: "기획 / 촬영 / 편집 / 업로드 관리",
  },
  {
    category: "brand",
    image: "/assets/archive-brand.svg",
    imageAlt: "Brand Promotion Film thumbnail",
    type: "Brand Promotion",
    title: "Brand Promotion Film",
    description: "브랜드와 제품의 분위기를 실사 기반의 이미지와 명확한 구성으로 전달하는 홍보영상입니다.",
    scope: "연출 / 촬영 / 편집 / 색보정",
  },
  {
    category: "space",
    image: "/assets/archive-restaurant.svg",
    imageAlt: "Restaurant & Space Content thumbnail",
    type: "Restaurant / Space Content",
    title: "Restaurant & Space Content",
    description: "레스토랑, 공간, 라이프스타일 브랜드의 감도를 소셜미디어 콘텐츠로 확장하는 작업입니다.",
    scope: "월간 콘텐츠 / 릴스 / 사진 / 영상",
  },
  {
    category: "brand",
    image: "/assets/archive-short.svg",
    imageAlt: "Short Visual Project thumbnail",
    type: "Short Visual Film",
    title: "Short Visual Project",
    description: "대표 프로젝트에는 넣지 않지만, 영상적 감도와 스타일을 보여줄 수 있는 짧은 비주얼 작업입니다.",
    scope: "촬영 / 편집 / 색보정",
  },
  {
    category: "external",
    image: "/assets/archive-portrait.svg",
    imageAlt: "Portrait Project thumbnail",
    type: "Portrait Project / External",
    title: "Portrait Project",
    description: "외부 홈페이지에 게시된 포트레이트 프로젝트입니다. 자체 업로드 대신 공식 페이지로 연결할 수 있습니다.",
    scope: "참여 역할에 맞게 수정",
  },
  {
    category: "social",
    image: "/assets/archive-more.svg",
    imageAlt: "Additional Works thumbnail",
    type: "Coming Soon",
    title: "Additional Works",
    description: "추가 공개 가능한 작업을 이곳에 계속 확장할 수 있습니다.",
    scope: "추후 업데이트",
  },
];
