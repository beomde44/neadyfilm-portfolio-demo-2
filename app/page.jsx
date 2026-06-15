"use client";

import { useState } from "react";

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const filterButtons = [
  { id: "all", label: "전체" },
  { id: "brand", label: "브랜드 필름" },
  { id: "event", label: "행사 영상" },
  { id: "performance", label: "공연 영상" },
  { id: "gear", label: "장비 리뷰" },
];

const projects = [
  {
    category: "brand",
    image: "/assets/brand-film.svg",
    imageAlt: "브랜드 필름 프로젝트 임시 썸네일",
    label: "브랜드 필름 프로젝트 열기",
    type: "Brand Film / 2026",
    title: "Project 01 - Brand Mood Film",
    description: "브랜드의 분위기, 제품의 존재감, 사람의 디테일을 중심으로 설계한 무드 필름입니다.",
    role: "연출 / 촬영 / 편집",
  },
  {
    category: "event",
    image: "/assets/event-film.svg",
    imageAlt: "행사 영상 프로젝트 임시 썸네일",
    label: "행사 영상 프로젝트 열기",
    type: "Event Film / 2026",
    title: "Project 02 - Corporate Event Sketch",
    description: "현장의 분위기, 주요 장면, 인터뷰를 연결해 구성한 다큐멘터리 스타일의 행사 스케치 영상입니다.",
    role: "촬영 / 편집 / 색보정",
  },
  {
    category: "brand",
    image: "/assets/restaurant.svg",
    imageAlt: "레스토랑 소셜 콘텐츠 프로젝트 임시 썸네일",
    label: "레스토랑 콘텐츠 프로젝트 열기",
    type: "Restaurant / Social Content",
    title: "Project 03 - Restaurant & Space Content",
    description: "레스토랑, 공간, 라이프스타일 브랜드의 분위기를 지속적으로 쌓아가는 숏폼 콘텐츠입니다.",
    role: "기획 / 촬영 / 편집",
  },
  {
    category: "performance",
    image: "/assets/performance.svg",
    imageAlt: "공연 영상 프로젝트 임시 썸네일",
    label: "공연 영상 프로젝트 열기",
    type: "Performance / Dance Film",
    title: "Project 04 - Movement-based Film",
    description: "리듬, 신체, 공간, 무대의 에너지를 중심으로 구성한 움직임 기반 영상입니다.",
    role: "연출 / 촬영 / 편집",
  },
  {
    category: "gear",
    image: "/assets/gear-review.svg",
    imageAlt: "장비 리뷰 프로젝트 임시 썸네일",
    label: "장비 리뷰 프로젝트 열기",
    type: "Gear Review / Visual Test",
    title: "Project 05 - Camera & Lens Review",
    description: "카메라와 렌즈를 실제 촬영 환경에서 이미지, 움직임, 워크플로우 중심으로 검증하는 리뷰 영상입니다.",
    role: "리뷰 / 촬영 / 편집",
  },
  {
    category: "gear",
    image: "/assets/product-test.svg",
    imageAlt: "제품 비주얼 테스트 프로젝트 임시 썸네일",
    label: "제품 비주얼 테스트 프로젝트 열기",
    type: "Product Review / Color Workflow",
    title: "Project 06 - Product Visual Test",
    description: "제품의 특징을 실제 사용 장면, 시네마틱 샘플, 명확한 리뷰 구조로 전달하는 영상입니다.",
    role: "리뷰 / 연출 / 편집",
  },
];

const services = [
  ["01", "Brand Film", "브랜드 소개 영상, 제품/공간 무드 필름, 캠페인 영상."],
  ["02", "Event Film", "기업 행사, 현장 스케치, 인터뷰 기반 하이라이트 영상."],
  ["03", "Performance Video", "무용, 공연, 쇼케이스, 라이브클립, 움직임 기반 영상."],
  ["04", "Social Media Package", "릴스, 숏폼, 인스타그램 운영 콘텐츠, 월간 업로드 패키지."],
  ["05", "Interview Content", "브랜드 인터뷰, 인물 기록, 유튜브 시리즈, 토크 콘텐츠."],
  ["06", "Gear / Product Review", "카메라, 렌즈, 장비, 제품을 실제 촬영 환경에서 검증하는 리뷰 영상."],
];

const processSteps = [
  ["01", "Discover", "프로젝트의 목적, 톤, 타깃을 함께 정리합니다."],
  ["02", "Plan", "촬영 구성, 무드, 인터뷰 질문, 일정 등을 설계합니다."],
  ["03", "Shoot", "프로젝트에 맞는 장비와 방식으로 촬영합니다."],
  ["04", "Edit", "편집, 색보정, 사운드, 자막으로 흐름을 완성합니다."],
  ["05", "Deliver", "웹, 유튜브, 인스타그램, 행사 목적에 맞는 포맷으로 납품합니다."],
];

const chipClass =
  "rounded-full border border-site-line bg-white/[0.035] px-[13px] py-[9px] text-[13px] text-site-muted transition hover:border-[rgba(154,67,56,0.55)] hover:bg-site-accentSoft hover:text-site-text";

const buttonClass =
  "inline-flex min-h-[46px] items-center justify-center rounded-full border border-site-line px-[18px] py-3 text-sm transition hover:-translate-y-0.5 hover:border-[rgba(239,231,218,0.34)]";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const currentYear = new Date().getFullYear();
  const visibleProjects = projects.filter((project) => activeFilter === "all" || project.category === activeFilter);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-[80] flex items-center justify-between bg-gradient-to-b from-[rgba(8,8,8,0.82)] via-[rgba(8,8,8,0.28)] to-transparent px-5 py-6 backdrop-blur-[14px] md:px-12">
        <a className="inline-flex gap-[7px] text-lg font-bold tracking-normal" href="#top" aria-label="NEADY FILM Home">
          <span>NEADY</span>
          <span className="font-medium text-site-muted">FILM</span>
        </a>
        <button
          className="inline-flex rounded-full border border-site-line bg-white/[0.04] px-3.5 py-2.5 text-site-text md:hidden"
          type="button"
          aria-expanded={isNavOpen}
          aria-controls="site-nav"
          onClick={() => setIsNavOpen((value) => !value)}
        >
          Menu
        </button>
        <nav
          id="site-nav"
          className={[
            "absolute left-5 right-5 top-[72px] flex-col items-stretch gap-0 rounded-[18px] border border-site-line bg-[rgba(16,15,14,0.94)] p-2.5 text-sm text-site-muted md:static md:flex md:flex-row md:items-center md:gap-[26px] md:border-0 md:bg-transparent md:p-0",
            isNavOpen ? "flex" : "hidden md:flex",
          ].join(" ")}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="rounded-xl p-3.5 transition hover:bg-white/[0.05] hover:text-site-text md:p-0 md:hover:bg-transparent"
              href={link.href}
              onClick={() => setIsNavOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate grid min-h-[100vh] items-end overflow-hidden px-5 pb-12 pt-[140px] md:px-12" aria-labelledby="hero-title">
          <div className="hero-media absolute inset-0 -z-20 scale-[1.02]" aria-hidden="true" />
          <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
          <div className="mx-auto w-full max-w-site pb-[110px] md:pb-[78px]">
            <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-site-muted">Seoul-based film studio</p>
            <h1 id="hero-title" className="mb-6 max-w-[980px] text-[52px] font-bold leading-[0.92] tracking-normal md:text-[9vw] xl:text-[124px]">
              Films for brands, spaces, and creative stories.
            </h1>
            <p className="max-w-[690px] text-[17px] text-site-muted md:text-[22px]">
              NEADY FILM은 브랜드, 공간, 사람의 이야기를 영상으로 설계하는 서울 기반 영상 제작 스튜디오입니다. 분위기, 움직임, 현장의 감도를 중심으로 브랜드 필름, 행사 영상, 공연 영상, 인터뷰 콘텐츠, 소셜미디어 영상을 제작합니다.
            </p>
            <div className="mt-[34px] flex flex-col flex-wrap gap-3 sm:flex-row">
              <a className={`${buttonClass} border-site-text bg-site-text font-bold text-[#111]`} href="#works">
                대표 작업 보기
              </a>
              <a className={`${buttonClass} bg-white/[0.035] text-site-text`} href="#contact">
                프로젝트 문의하기
              </a>
            </div>
          </div>
          <div className="absolute bottom-7 left-5 right-5 flex flex-wrap justify-start gap-2 text-xs uppercase tracking-[0.12em] text-[rgba(239,231,218,0.56)] md:left-12 md:right-12 md:justify-center">
            {["Brand Film", "Event Film", "Performance", "Social Content"].map((item) => (
              <span key={item} className="rounded-full border border-site-line bg-[rgba(8,8,8,0.2)] px-[11px] py-2">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="works" className="mx-auto max-w-site px-5 py-[82px] md:px-12 md:py-[118px]" aria-labelledby="works-title">
          <div className="mb-11 grid items-end gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:gap-12">
            <div>
              <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-site-muted">Selected Works</p>
              <h2 id="works-title" className="text-[34px] font-bold leading-[0.96] tracking-normal md:text-[5vw] xl:text-[74px]">
                A curated structure ready for real projects.
              </h2>
            </div>
            <p className="text-[17px] text-site-muted">
              현재는 실제 자료를 넣기 전의 데모 구성입니다. 각 카드의 썸네일, 영상 링크, 클라이언트명, 역할, 설명 문구를 실제 프로젝트 자료로 교체하면 바로 포트폴리오로 사용할 수 있습니다.
            </p>
          </div>

          <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter works">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`${chipClass} ${activeFilter === button.id ? "border-[rgba(154,67,56,0.55)] bg-site-accentSoft text-site-text" : ""}`}
                type="button"
                onClick={() => setActiveFilter(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-card border border-site-line bg-gradient-to-b from-white/[0.052] to-white/[0.018] transition hover:-translate-y-1 hover:border-[rgba(239,231,218,0.28)]">
                <a className="block aspect-video overflow-hidden bg-site-panel" href="#" aria-label={project.label}>
                  <img className="h-full w-full object-cover transition duration-[450ms] group-hover:scale-[1.035]" src={project.image} alt={project.imageAlt} />
                </a>
                <div className="p-5 md:p-6">
                  <p className="mb-2.5 text-xs uppercase tracking-[0.1em] text-site-muted">{project.type}</p>
                  <h3 className="mb-2.5 text-[22px] font-bold leading-[1.04] tracking-normal md:text-[30px]">{project.title}</h3>
                  <p className="text-site-muted">{project.description}</p>
                  <dl className="mt-6 grid gap-2 border-t border-site-line pt-[18px]">
                    <div className="grid grid-cols-[70px_1fr] gap-4 text-[13px]">
                      <dt className="text-[rgba(239,231,218,0.48)]">역할</dt>
                      <dd className="m-0 text-site-muted">{project.role}</dd>
                    </div>
                    <div className="grid grid-cols-[70px_1fr] gap-4 text-[13px]">
                      <dt className="text-[rgba(239,231,218,0.48)]">상태</dt>
                      <dd className="m-0 text-site-muted">실제 프로젝트로 교체 예정</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-site px-5 py-[82px] md:px-12 md:py-[118px]" aria-labelledby="services-title">
          <div className="mb-11 max-w-[760px]">
            <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-site-muted">Services</p>
            <h2 id="services-title" className="text-[34px] font-bold leading-[0.96] tracking-normal md:text-[5vw] xl:text-[74px]">
              From planning to final delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-site-line md:grid-cols-3">
            {services.map(([number, title, copy]) => (
              <article key={number} className="border-b border-r border-site-line bg-white/[0.025] p-6 md:p-[30px]">
                <span className="mb-[30px] block text-[13px] tracking-[0.16em] text-site-accent">{number}</span>
                <h3 className="mb-3 text-2xl font-bold tracking-normal">{title}</h3>
                <p className="mb-0 text-site-muted">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-site-line py-[82px] md:py-[118px]" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-site grid-cols-1 gap-6 px-5 md:grid-cols-[0.9fr_1fr] md:gap-[70px] md:px-12">
            <div>
              <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-site-muted">About</p>
              <h2 id="about-title" className="text-[34px] font-bold leading-[0.96] tracking-normal md:text-[5vw] xl:text-[74px]">
                Not just recording. Designing the atmosphere.
              </h2>
            </div>
            <div className="text-lg">
              <p className="text-[17px] text-site-muted">
                NEADY FILM은 서울을 기반으로 활동하는 영상 제작 스튜디오입니다. 무용과 영상 작업을 이어온 정범석의 시선을 바탕으로, 브랜드 필름, 행사 스케치, 공연 영상, 인터뷰 콘텐츠, 소셜미디어 영상을 제작합니다.
              </p>
              <p className="mt-[22px] text-[17px] text-site-muted">
                우리는 단순히 장면을 기록하는 것보다, 사람과 공간, 브랜드가 가진 고유한 분위기를 발견하고 그것을 영상의 흐름으로 설계하는 것을 중요하게 생각합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-5 py-[82px] md:px-12 md:py-[118px]" aria-labelledby="process-title">
          <div className="mb-11 max-w-[760px]">
            <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-site-muted">Process</p>
            <h2 id="process-title" className="text-[34px] font-bold leading-[0.96] tracking-normal md:text-[5vw] xl:text-[74px]">
              A clear path for production.
            </h2>
          </div>
          <div className="grid grid-cols-1 border-l border-t border-site-line md:grid-cols-5">
            {processSteps.map(([number, title, copy]) => (
              <div key={number} className="border-b border-r border-site-line bg-white/[0.025] p-6 md:p-[30px]">
                <span className="mb-[30px] block text-[13px] tracking-[0.16em] text-site-accent">{number}</span>
                <h3 className="mb-3 text-2xl font-bold tracking-normal">{title}</h3>
                <p className="mb-0 text-site-muted">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[900px] px-5 py-[82px] text-center md:px-12 md:py-[118px]" aria-labelledby="contact-title">
          <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-site-muted">Contact</p>
          <h2 id="contact-title" className="mb-5 text-[34px] font-bold leading-[0.96] tracking-normal md:text-[5vw] xl:text-[74px]">
            Let&apos;s build the next film.
          </h2>
          <p className="mx-auto max-w-[620px] text-[17px] text-site-muted">
            브랜드 영상, 행사 기록, 공연 영상, 인터뷰 콘텐츠, 소셜미디어 영상 제작 문의를 받고 있습니다. 아래 연락처와 링크는 실제 정보로 교체하면 됩니다.
          </p>
          <div className="mt-[34px] flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
            <a className={`${buttonClass} border-site-text bg-site-text font-bold text-[#111]`} href="mailto:hello@neadyfilm.com">
              hello@neadyfilm.com
            </a>
            <a className={`${buttonClass} bg-white/[0.035] text-site-text`} href="#" aria-label="인스타그램 열기">
              Instagram
            </a>
            <a className={`${buttonClass} bg-white/[0.035] text-site-text`} href="#" aria-label="유튜브 열기">
              YouTube
            </a>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-5 border-t border-site-line px-5 py-7 text-[13px] text-[rgba(239,231,218,0.48)] md:flex-row md:px-12">
        <p className="m-0">© {currentYear} NEADY FILM. Portfolio demo.</p>
        <a href="#top">맨 위로</a>
      </footer>
    </>
  );
}
