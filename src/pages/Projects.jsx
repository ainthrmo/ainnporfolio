import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ProjectsSection from "../components/ProjectsSection";
import { playBlip } from "../utils/sounds";

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects — Aindra Moh"
        description="A selection of digital products, SaaS applications, UX experiments, and interactive web builds designed and built by Aindra Moh."
        path="/projects"
      />
      <main>
        {/* MOSSQR FLAGSHIP */}
        <section className="section" id="projects-mossqr">
          <div className="container">
            <div className="ascii-title" aria-hidden="true">
              <span className="typing" style={{ "--delay": "0.1s", "--chars": "22", "--duration": "0.6s" }}>
                ┌─ FLAGSHIP_PROJECT ─┐
              </span>
            </div>

            <div className="mossqr-feature-card progressive" style={{ "--delay": "0.2s" }}>
              <div className="mossqr-feature-header">
                <div>
                  <div style={{ fontSize: "0.6rem", opacity: 0.5, letterSpacing: "0.3em", marginBottom: 8 }}>
                    [ FLAGSHIP / MVP ]
                  </div>
                  <h1 className="mossqr-feature-title" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", margin: "0 0 8px" }}>
                    MOSSQR
                  </h1>
                  <p className="mossqr-feature-tagline">
                    Turning restaurant menus into a visual selling experience.
                  </p>
                </div>
                <div className="mossqr-status-badge">
                  <span>[ BUILDING ]</span>
                </div>
              </div>

              <p className="ascii-note" style={{ maxWidth: "680px" }}>
                MOSSQR is designed to help restaurants showcase their food, reduce hesitation around unfamiliar dishes, and let owners update menus without constantly reprinting them.
              </p>

              <div className="mossqr-journey" aria-label="Product journey">
                <span className="mossqr-step">Scan</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">Browse</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">See</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">Discover</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">Order</span>
              </div>

              <div className="mossqr-feature-actions">
                <Link
                  to="/projects/mossqr"
                  className="btn"
                  onMouseEnter={() => playBlip(660, 0.02)}
                >
                  [ View Case Study ]
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <ProjectsSection />
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 0", background: "var(--bg)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: "0.75rem", opacity: 0.6 }}>
          <span>© {new Date().getFullYear()} Aindra Moh — Designer &amp; Developer</span>
          <Link to="/" style={{ textDecoration: "underline" }}>← Back to Home</Link>
        </div>
      </footer>
    </>
  );
}


