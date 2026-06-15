"use client";

import { useState } from "react";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "/archive", label: "Archive" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const filterButtons = [
  { id: "all", label: "전체" },
  { id: "documentary", label: "미니 다큐" },
  { id: "dance", label: "댄스필름" },
  { id: "performance", label: "퍼포먼스" },
  { id: "event", label: "행사 스케치" },
  { id: "review", label: "리뷰 채널" },
];

const projects = [
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
    role: "촬영 / 편집",
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
      "최소한의 편집점을 제외한 모든 과정이 즉흥적 퍼포먼스로 진행된 작업입니다. 퍼포머와 촬영자 모두 현장에서 즉흥적으로 작업을 진행했습니다.",
    role: "촬영 / 편집",
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
    role: "촬영 / 편집",
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
    role: "촬영 / 편집",
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
    role: "촬영 / 편집",
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
    role: "촬영 / 편집",
    release: "Public",
    actions: [
      { label: "영상 보기", href: "https://youtu.be/pjrMcWE4SvY" },
      { label: "리뷰 채널", href: "https://www.youtube.com/@Gear-In" },
    ],
  },
];

const services = [
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

const processSteps = [
  ["01", "Discover", "프로젝트의 목적, 분위기, 인물, 음악, 움직임의 방향을 함께 정리합니다."],
  ["02", "Plan", "촬영 구성, 무드, 장소, 인터뷰 질문, 장면의 흐름을 설계합니다."],
  ["03", "Shoot", "프로젝트의 성격에 맞는 장비와 방식으로 실사 기반의 이미지를 촬영합니다."],
  ["04", "Edit", "편집, 색보정, 사운드, 자막을 통해 영상의 리듬과 감도를 완성합니다."],
  ["05", "Deliver", "상영, 유튜브, 인스타그램, 행사, 브랜드 채널 등 사용 목적에 맞는 포맷으로 납품합니다."],
];

const heroTags = ["Dance Film", "Mini Documentary", "Interview", "Performance", "Gear-in"];

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const currentYear = new Date().getFullYear();
  const visibleProjects = projects.filter((project) => activeFilter === "all" || project.category === activeFilter);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="site-header z-[80]">
        <a className="logo" href="#top" aria-label="NEADY FILM Home">
          <span>NEADY</span>
          <span>FILM</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isNavOpen}
          aria-controls="site-nav"
          onClick={() => setIsNavOpen((value) => !value)}
        >
          Menu
        </button>
        <nav id="site-nav" className={`site-nav ${isNavOpen ? "open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsNavOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <video className="hero-video" autoPlay muted loop playsInline poster="/assets/hero-poster.webp">
              <source src="/assets/showreel.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">Based in Korea</p>
            <h1 id="hero-title">Live-action films for movement and story.</h1>
            <p className="hero-copy">
              NEADY FILM은 <strong>실사 기반의 필름룩과 아트비디오의 감도</strong>를 중심으로 작업하는 film
              studio입니다. 독일에서 시작된 무대예술의 시선을 영상예술로 확장하며, 현재는 한국을 기반으로 다양한
              창작자와 브랜드의 이야기를 영상으로 만듭니다.
            </p>
            <p className="hero-copy">
              댄스필름, 미니 다큐멘터리, 인터뷰, 공연 영상을 중심으로 작업하며, 뮤직비디오, 행사 스케치,
              소셜미디어 콘텐츠, 홍보영상, 자체 리뷰 채널 Gear-in까지 운영합니다.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#works">
                대표 작업 보기
              </a>
              <a className="button ghost" href="#contact">
                프로젝트 문의하기
              </a>
              <a className="button ghost" href="/archive">
                Archive 보기
              </a>
            </div>
          </div>
          <div className="hero-meta" aria-label="Production categories">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section id="works" className="section works-section" aria-labelledby="works-title">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected Works</p>
              <h2 id="works-title">Core works.</h2>
            </div>
            <p>
              움직임, 인물, 음악, 공간의 감도를 실사 기반의 필름룩으로 다룹니다. 대표 작업은 댄스필름,
              미니 다큐멘터리, 행사 스케치, 퍼포먼스 프로젝트, 비주얼 리뷰를 중심으로 구성했습니다.
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filter works">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`filter-button ${activeFilter === button.id ? "active" : ""}`}
                type="button"
                onClick={() => setActiveFilter(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article key={project.title} className={`project-card ${project.featured ? "featured" : ""}`}>
                <ExternalLink className="thumb" href={project.href}>
                  <img src={project.image} alt={project.imageAlt} />
                </ExternalLink>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <dl>
                    <div>
                      <dt>역할</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>공개</dt>
                      <dd>{project.release}</dd>
                    </div>
                  </dl>
                  <div className="card-actions">
                    {project.actions.map((action) => (
                      <ExternalLink key={action.href} className="button ghost" href={action.href}>
                        {action.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="archive-band">
            <p className="eyebrow">More Works</p>
            <h3>More works in Archive.</h3>
            <p>
              대표 작업 외에도 소셜미디어 콘텐츠, 브랜드 홍보영상, 행사 기록, 레스토랑/공간 콘텐츠, 짧은
              비주얼 작업 등을 별도 Archive 페이지에서 확인할 수 있습니다.
            </p>
            <div className="inline-actions">
              <a className="button primary" href="/archive">
                Archive 보기
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section" aria-labelledby="services-title">
          <div className="section-head compact">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">What we do.</h2>
          </div>
          <div className="service-list">
            {services.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="about-layout">
            <div>
              <p className="eyebrow">About</p>
              <h2 id="about-title">Started from stage.</h2>
            </div>
            <div className="about-copy">
              <p>
                NEADY FILM은 실사 기반의 필름룩과 아트비디오의 감도를 중심으로 작업하는 Based in Korea film
                studio입니다. 2021년 독일에서 무대예술을 영상예술로 확장하는 작업에서 시작되었고, 2024년
                7월 22일 한국에서 정식으로 출발했습니다.
              </p>
              <p>
                우리는 단순히 장면을 기록하는 것보다, 프로젝트가 가진 고유한 리듬과 감도를 발견하고 그것을 하나의
                흐름으로 만드는 것을 중요하게 생각합니다.
              </p>
              <p>한국을 기반으로 해외 작업도 가능하며, 한국어 / 독일어 / 영어로 커뮤니케이션합니다.</p>
            </div>
          </div>
        </section>

        <section className="section process-section" aria-labelledby="process-title">
          <div className="section-head compact">
            <p className="eyebrow">Process</p>
            <h2 id="process-title">How we work.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, copy]) => (
              <div key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section channel-section" aria-labelledby="channel-title">
          <div className="channel-layout">
            <div>
              <p className="eyebrow">Gear-in Review Channel</p>
              <h2 id="channel-title">Visual reviews in real use.</h2>
            </div>
            <div className="channel-copy">
              <p>
                NEADY FILM은 자체 리뷰 채널 Gear-in을 통해 카메라, 렌즈, 영상 장비를 실제 촬영 환경에서
                테스트하고 리뷰합니다. 스펙보다 실제 이미지, 움직임, 색감, 워크플로우를 중심으로 장비를 바라봅니다.
              </p>
              <div className="inline-actions">
                <ExternalLink className="button primary" href="https://www.youtube.com/@Gear-In">
                  Gear-in 리뷰 채널 보기
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s build the next film.</h2>
          <p>
            댄스필름, 미니 다큐멘터리, 인터뷰, 공연 영상, 뮤직비디오 제작 문의를 받고 있습니다. 행사 스케치,
            브랜드 홍보영상, 소셜미디어 콘텐츠 역시 NEADY FILM의 영상적 감도를 바탕으로 함께 작업할 수 있습니다.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:neadyfilm0722@naver.com">
              프로젝트 문의
            </a>
            <a className="button ghost" href="mailto:neadyfilm0722@naver.com">
              neadyfilm0722@naver.com
            </a>
            <ExternalLink className="button ghost" href="https://www.instagram.com/neadyfilm/">
              Instagram
            </ExternalLink>
            <ExternalLink className="button ghost" href="https://www.youtube.com/@Gear-In">
              Gear-in Review Channel
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {currentYear} NEADY FILM.</p>
        <a href="#top">맨 위로</a>
      </footer>
    </>
  );
}
