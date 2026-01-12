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
          <h2>About</h2>
          <p style={{ color: "var(--muted)", maxWidth: 600 }}>
            Short intro about you. What you’re learning. What kind of role you want.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <p style={{ color: "var(--muted)" }}>
            Email: <a href="mailto:you@email.com">you@email.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
