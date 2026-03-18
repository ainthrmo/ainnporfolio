import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section progressive" style={{ "--delay": "0.1s" }}>
      <div className="container">
        <div className="ascii-title">
          <span
            className="typing"
            style={{ "--delay": "0.15s", "--chars": "20", "--duration": "0.6s" }}
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
              baseDelay={0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
