import Image from "next/image";
import ExternalLink from "./ExternalLink";

export default function ProjectCard({ project, featured = false, labels = { role: "역할", release: "공개" } }) {
  const hasActions = Array.isArray(project.actions) && project.actions.length > 0;
  const Wrapper = project.href ? ExternalLink : "a";
  const wrapperProps = project.href
    ? { className: "thumb", href: project.href }
    : { className: "thumb", href: "#" };

  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <Wrapper {...wrapperProps}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={featured}
          sizes={featured ? "(max-width: 980px) 100vw, 58vw" : "(max-width: 900px) 100vw, 50vw"}
        />
      </Wrapper>
      <div className="project-info">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <dl>
          <div>
            <dt>{labels.role}</dt>
            <dd>{project.role || project.scope}</dd>
          </div>
          <div>
            <dt>{labels.release}</dt>
            <dd>{project.release || "추후 교체"}</dd>
          </div>
        </dl>
        <div className="card-actions">
          {hasActions ? (
            project.actions.map((action) => (
              <ExternalLink key={action.href} className="button ghost" href={action.href}>
                {action.label}
              </ExternalLink>
            ))
          ) : (
            <a className="button ghost" href="#">
              작업 보기
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
