"use client";

import { useState } from "react";
import {
  filterButtons,
  gearInUrl,
  heroTags,
  instagramUrl,
  navLinks,
  processSteps,
  projects,
  services,
  siteEmail,
} from "../data/site";
import ExternalLink from "./ExternalLink";
import FilterTabs from "./FilterTabs";
import Footer from "./Footer";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = projects.filter((project) => activeFilter === "all" || project.category === activeFilter);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <Header links={navLinks} logoHref="#top" />

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

          <FilterTabs
            buttons={filterButtons}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
            label="Filter works"
          />

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured={project.featured} />
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
                <ExternalLink className="button primary" href={gearInUrl}>
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
            <a className="button primary" href={`mailto:${siteEmail}`}>
              프로젝트 문의
            </a>
            <a className="button ghost" href={`mailto:${siteEmail}`}>
              {siteEmail}
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
