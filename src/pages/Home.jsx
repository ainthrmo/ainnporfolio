import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AboutSection from "../components/AboutSection";
import { Component as GenerativeArt } from "../components/ui/generative-art";
import { playBlip } from "../utils/sounds";



export default function Home() {
  return (
    <>
      <SEO
        title="Aindra Moh — Designer & Developer"
        description="Aindra Moh is a designer and developer building digital products, SaaS experiences, and interactive web experiences."
        path="/"
      />
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero__scanlines" aria-hidden="true"></div>

          <div className="hero__status">
            <span className="hero__dot"></span>
            <span>AVAILABLE FOR WORK // 2026</span>
          </div>

          <h1 className="hero__name">
            Aindra Moh<span className="hero__cursor hero__cursor--blink">_</span>
          </h1>

          <p className="hero__tagline">
            I design &amp; build digital products that solve real problems.
            Product thinking, UX/UI, frontend engineering &amp; AI-powered experiences.
          </p>

          <div className="hero__links">
            <a
              className="hero__link hero__link--primary"
              href="mailto:ainthrmo@gmail.com"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              ainthrmo@gmail.com ↗
            </a>
            <a
              className="hero__link"
              href="https://www.linkedin.com/in/aindra-moe-741851412/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              LinkedIn ↗
            </a>
            <a
              className="hero__link"
              href="https://github.com/ainthrmo"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* LAB / GENERATIVE ART EXPERIMENT */}
        <section className="section progressive" id="lab" style={{ "--delay": "0.1s" }}>
          <div className="container">
            <div className="ascii-title" aria-hidden="true">
              <span
                className="typing"
                style={{ "--delay": "0.15s", "--chars": "20", "--duration": "0.6s" }}
              >
                ┌─ SYSTEM_LAB ─┐
              </span>
            </div>

            <p className="ascii-note" style={{ opacity: 0.6, fontSize: "0.85rem", marginBottom: 20 }}>
              &gt; EXPERIMENT: PROCEDURAL PHYSICS &amp; VELOCITY VECTOR CANVAS
            </p>

            <div className="ascii-card" style={{ padding: "clamp(1rem, 3vw, 2rem)" }}>
              <GenerativeArt />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, flexWrap: "wrap", gap: 10 }}>
                <span style={{ fontSize: "0.7rem", opacity: 0.5 }}>
                  Click canvas to restart simulation · Scroll to trigger animation loops
                </span>
                <Link
                  to="/lab"
                  className="btn"
                  onMouseEnter={() => playBlip(660, 0.02)}
                >
                  [ Open Lab Page ]
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <AboutSection />

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
                <span className="typing block" style={{ "--delay": "0.3s", "--chars": "38" }}>
                  Have an idea worth building?
                </span>
                <span className="typing block" style={{ "--delay": "0.4s", "--chars": "26" }}>
                  Drop a line.
                </span>
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                <a
                  className="btn"
                  href="mailto:ainthrmo@gmail.com"
                  onMouseEnter={() => playBlip(660, 0.02)}
                >
                  Email
                </a>
                <a
                  className="btn"
                  href="https://www.linkedin.com/in/aindra-moe-741851412/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => playBlip(660, 0.02)}
                >
                  LinkedIn
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
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 0", background: "var(--bg)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: "0.75rem", opacity: 0.6 }}>
          <span>© {new Date().getFullYear()} Aindra Moh — Designer &amp; Developer</span>
          <span>portfolio-ainn.vercel.app</span>
        </div>
      </footer>
    </>
  );
}


