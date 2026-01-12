export default function ProjectCard({ project }) {
  return (
    <article className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {project.image ? (
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
          />
        </div>
      ) : null}

      <div>
        <h3 style={{ margin: 0 }}>{project.title}</h3>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          {project.description}
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.10)",
              color: "var(--muted)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
        {project.live ? (
          <a className="btn" href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : null}

        {project.github ? (
          <a className="btn" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
