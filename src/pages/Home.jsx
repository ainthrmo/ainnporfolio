import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import { playBlip } from "../utils/sounds";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="section" id="home">
        <div className="container hero-shell progressive" style={{ "--delay": "0s" }}>
          <div style={{ fontSize: "0.7rem", opacity: 0.5, marginBottom: 12, display: "flex", justifyContent: "space-between" }}>
            <span>Terminal - v1.0.4</span>
            <span>[ _ □ x ]</span>
          </div>
          <div className="hero-console">
            <span
              className="typing"
              style={{ "--delay": "0s", "--chars": "36", "--duration": "0.8s" }}
            >
              &gt; running ./portfolio --theme=ascii--
            </span>
            <span
              className="typing"
              style={{ "--delay": "0.15s", "--chars": "32", "--duration": "0.7s" }}
            >
              &gt; system: midnight monochrome
            </span>
          </div>
          <h1 className="hero-title typing" style={{ "--delay": "0.2s", "--chars": "20" }}>
            Aindra Moh
          </h1>
          <p className="ascii-note" style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="typing block" style={{ "--delay": "0.3s", "--chars": "54" }}>
              Junior web developer.
            </span>
            <span className="typing block" style={{ "--delay": "0.45s", "--chars": "66" }}>
             I vibe code the modern web—skipping the boilerplate and moving straight to building high-performance, complex applications. From clean structures to full-scale digital ecosystems.
            </span>
          </p>
          <div className="hero-actions">
            <a 
              className="btn" 
              href="mailto:wanderertidal@email.com"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              Email
            </a>
            <a 
              className="btn" 
              href="https://github.com/ainthrmo" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* REUSABLE SECTIONS */}
      <AboutSection />
      <ProjectsSection />

      {/* CONTACT SECTION */}
      <section className="section progressive" id="contact" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title">
            <span
              className="typing"
              style={{ "--delay": "0.15s", "--chars": "16", "--duration": "0.6s" }}
            >
              ┌─ CONTACT ─┐
            </span>
          </div>

          <div className="contact-card progressive" style={{ "--delay": "0.2s" }}>
            <p className="ascii-note" style={{ margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="typing block" style={{ "--delay": "0.3s", "--chars": "74" }}>
                Want to collaborate or need a clean build shipped with precision?
              </span>
              <span className="typing block" style={{ "--delay": "0.4s", "--chars": "50" }}>
                Drop a line.
              </span>
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
              <a 
                className="btn" 
                href="mailto:wanderertidal@email.com"
                onMouseEnter={() => playBlip(660, 0.02)}
              >
                Email
              </a>
              <a 
                className="btn" 
                href="https://github.com/ainthrmo" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => playBlip(660, 0.02)}
              >
                GitHub
              </a>
              <a 
                className="btn" 
                href="https://linkedin.com/in/yourname" 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={() => playBlip(660, 0.02)}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
