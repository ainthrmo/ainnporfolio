import { playBlip } from "../utils/sounds";

export default function ProjectCard({ project, index = 0, baseDelay = 0 }) {
  const totalDelay = (baseDelay ?? 0) + index * 0.08;
  return (
    <article
      className="ascii-card progressive"
      style={{ "--delay": `${totalDelay}s` }}
    >
      <div style={{ fontSize: "0.6rem", opacity: 0.5, marginBottom: -10 }}>
        ┌───────────────────────────────────┐
      </div>
      {project.image && (
        <img src={project.image} alt={project.title} loading="lazy" />
      )}

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: "1.1rem", margin: 0 }}>{project.title}</h3>
          {project.status === "IN_PROGRESS" && (
            <span style={{ 
              fontSize: '0.6rem', 
              color: '#ffcc00', 
              border: '1px solid #ffcc00', 
              padding: '2px 6px',
              letterSpacing: '0.1em'
            }}>
              [ IN_PROGRESS ]
            </span>
          )}
        </div>
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
          <a
            className="btn"
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playBlip(660, 0.03)}
          >
            [ run_demo ]
          </a>
        )}

        {project.github && (
          <a
            className="btn"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => playBlip(660, 0.03)}
          >
            [ view_src ]
          </a>
        )}
      </div>
      <div style={{ fontSize: "0.6rem", opacity: 0.5, marginTop: 4 }}>
        └───────────────────────────────────┘
      </div>
    </article>
  );
}
