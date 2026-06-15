"use client";

import { useState } from "react";

const archiveNavLinks = [
  { href: "/#works", label: "Works" },
  { href: "/archive", label: "Archive", active: true },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const archiveFilters = [
  { id: "all", label: "전체" },
  { id: "social", label: "소셜미디어" },
  { id: "brand", label: "브랜드 / 홍보" },
  { id: "space", label: "공간 / 레스토랑" },
  { id: "external", label: "외부 링크" },
];

const archiveIntroCards = [
  ["01", "Social Media Content", "릴스, 숏폼, 인스타그램 운영 콘텐츠처럼 지속적으로 브랜드의 감도를 쌓는 작업입니다."],
  ["02", "Brand / Promotion", "브랜드 홍보영상, 제품 비주얼, 공간 무드 필름 등 상업 목적의 영상 작업입니다."],
  ["03", "External / Portrait", "소유권이 외부에 있는 프로젝트는 자체 업로드 대신 외부 페이지로 연결할 수 있습니다."],
];

const archiveProjects = [
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

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ArchivePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const currentYear = new Date().getFullYear();
  const visibleProjects = archiveProjects.filter((project) => activeFilter === "all" || project.category === activeFilter);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <header className="site-header z-[80]">
        <a className="logo" href="/" aria-label="NEADY FILM Home">
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
          {archiveNavLinks.map((link) => (
            <a key={link.href} className={link.active ? "active" : ""} href={link.href} onClick={() => setIsNavOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero compact-hero" aria-labelledby="archive-title">
          <div className="hero-media" aria-hidden="true">
            <video className="hero-video" autoPlay muted loop playsInline poster="/assets/hero-poster.webp">
              <source src="/assets/showreel.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">Archive</p>
            <h1 id="archive-title">More works.</h1>
            <p className="hero-copy">
              대표 작업 외에도 다양한 형식의 영상 작업을 진행하고 있습니다. 소셜미디어 콘텐츠, 브랜드 홍보영상,
              행사 기록, 레스토랑/공간 콘텐츠, 짧은 비주얼 필름 등 프로젝트의 목적에 맞춰 유연하게 제작합니다.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#archive-works">
                Archive 작업 보기
              </a>
              <a className="button ghost" href="/#works">
                Selected Works로 돌아가기
              </a>
            </div>
          </div>
        </section>

        <section className="section archive-intro" aria-label="Archive categories">
          <div className="archive-info-grid">
            {archiveIntroCards.map(([number, title, copy]) => (
              <article key={number} className="archive-info-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="archive-works" className="section works-section" aria-labelledby="archive-works-title">
          <div className="section-head">
            <div>
              <p className="eyebrow">More Works</p>
              <h2 id="archive-works-title">Flexible archive.</h2>
            </div>
            <p>
              이 페이지는 대표 작업보다 더 넓은 범위의 작업을 보여주는 공간입니다. 추후 소셜미디어 콘텐츠, 브랜드
              홍보영상, 레스토랑/공간 콘텐츠, 포트레이트 프로젝트 등을 추가할 수 있습니다.
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filter archive works">
            {archiveFilters.map((button) => (
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
              <article key={project.title} className="project-card">
                <a className="thumb" href="#">
                  <img src={project.image} alt={project.imageAlt} />
                </a>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <dl>
                    <div>
                      <dt>범위</dt>
                      <dd>{project.scope}</dd>
                    </div>
                    <div>
                      <dt>링크</dt>
                      <dd>추후 교체</dd>
                    </div>
                  </dl>
                  <div className="card-actions">
                    <a className="button ghost" href="#">
                      작업 보기
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s build the next film.</h2>
          <p>대표 작업 외의 소셜미디어 콘텐츠, 브랜드 홍보영상, 행사 기록, 짧은 비주얼 작업도 프로젝트 목적에 맞게 제작합니다.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:neadyfilm0722@naver.com">
              프로젝트 문의
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
