import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main>
      <section id="projects" className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title">
            <span
              className="typing"
              style={{ "--delay": "0.12s", "--chars": "20", "--duration": "1s" }}
            >
              ┌─ PROJECTS ─┐
            </span>
          </div>

          <div className="ascii-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                baseDelay={0.2}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
