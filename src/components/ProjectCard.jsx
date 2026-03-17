export default function ProjectCard({ project, index = 0, baseDelay = 0 }) {
  const totalDelay = (baseDelay ?? 0) + index * 0.08;
  return (
    <article
      className="ascii-card progressive"
      style={{ "--delay": `${totalDelay}s` }}
    >
      {project.image && (
        <img src={project.image} alt={project.title} loading="lazy" />
      )}

      <div>
        <h3>{project.title}</h3>
        <p className="ascii-note">{project.description}</p>
      </div>

      <div className="tag-row">
        {project.tech.map((tech, techIndex) => {
          const baseDelay = 0.3 + index * 0.04;
          const delay = baseDelay + techIndex * 0.04;
          return (
            <span
              className="tag tag-typing"
              key={tech}
              style={{
                "--delay": `${delay}s`,
                "--chars": tech.length + 2,
                "--duration": "0.7s",
              }}
            >
              {tech}
            </span>
          );
        })}
      </div>

      <div className="action-row">
        {project.live && (
          <a className="btn" href={project.live} target="_blank" rel="noreferrer">
            live demo
          </a>
        )}

        {project.github && (
          <a className="btn" href={project.github} target="_blank" rel="noreferrer">
            github
          </a>
        )}
      </div>
    </article>
  );
}
