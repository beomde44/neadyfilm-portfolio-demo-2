"use client";

import { useState } from "react";
import {
  archiveFilters,
  archiveIntroCards,
  archiveNavLinks,
  archiveProjects,
  gearInUrl,
  instagramUrl,
  siteEmail,
} from "../data/site";
import ExternalLink from "./ExternalLink";
import FilterTabs from "./FilterTabs";
import Footer from "./Footer";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = archiveProjects.filter((project) => activeFilter === "all" || project.category === activeFilter);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <Header links={archiveNavLinks} />

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

          <FilterTabs
            buttons={archiveFilters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
            label="Filter archive works"
          />

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} labels={{ role: "범위", release: "링크" }} />
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s build the next film.</h2>
          <p>대표 작업 외의 소셜미디어 콘텐츠, 브랜드 홍보영상, 행사 기록, 짧은 비주얼 작업도 프로젝트 목적에 맞게 제작합니다.</p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${siteEmail}`}>
              프로젝트 문의
            </a>
            <ExternalLink className="button ghost" href={instagramUrl}>
              Instagram
            </ExternalLink>
            <ExternalLink className="button ghost" href={gearInUrl}>
              Gear-in Review Channel
            </ExternalLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
