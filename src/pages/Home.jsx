import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main>
      {/* HERO ... keep as is */}

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="section">
  <div className="container">
    <h2 style={{ margin: "0 0 12px" }}>About</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 18,
        alignItems: "start",
      }}
    >
      <div className="card">
        <h3 style={{ margin: 0 }}>Hi, I’m AindraMoh 👋</h3>
        <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>
          I’m a junior developer focused on building clean, responsive web apps.
          I enjoy turning ideas into simple UI that feels fast and easy to use.
        </p>
        <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>
          Right now I’m improving my React fundamentals, project structure, and deployment workflow.
        </p>
      </div>

      <div className="card">
        <h3 style={{ margin: 0 }}>Skills</h3>

        <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>Frontend</p>
            <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
              React, Vite, HTML, CSS, Responsive UI
            </p>
          </div>

          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>Tools</p>
            <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
              Git/GitHub, VS Code, npm
            </p>
          </div>

          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>Learning</p>
            <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
              TypeScript, APIs, Testing
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile fix */}
    <style>{`
      @media (max-width: 820px) {
        #about .container > div { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </div>
</section>


       {/* CONTACT */}
<section id="contact" className="section">
  <div className="container">
    <h2 style={{ margin: "0 0 12px" }}>Contact</h2>

    <div className="card" style={{ display: "grid", gap: 12 }}>
      <p style={{ margin: 0, color: "var(--muted)" }}>
        Want to work together or have feedback? Send me a message.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a className="btn" href="mailto:wanderertidal@email.com">Email Me</a>
        <a className="btn" href="https://github.com/ainthrmo" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
