import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AsciiSnake from "../components/AsciiSnake";
import { Component as GenerativeArt } from "../components/ui/generative-art";

export default function Lab() {
  return (
    <>
      <SEO
        title="Lab — Aindra Moh"
        description="Interactive experiments, prototypes, and creative code exploration by Aindra Moh."
        path="/lab"
      />
      <main>
        {/* EXPERIMENT 1: ASCII SNAKE */}
        <section className="section">
          <div className="container">
            <div className="ascii-title" aria-hidden="true">
              <span
                className="typing"
                style={{ "--delay": "0.1s", "--chars": "20", "--duration": "0.6s" }}
              >
                ┌─ SYSTEM_LAB ─┐
              </span>
            </div>

            <p className="ascii-note" style={{ marginBottom: 32, textAlign: "center" }}>
              &gt; EXPERIMENT_01: RETRO ASCII SNAKE GAME
            </p>

            <AsciiSnake />
          </div>
        </section>

        {/* EXPERIMENT 2: GENERATIVE ART CANVAS */}
        <section className="section progressive" style={{ "--delay": "0.2s" }}>
          <div className="container">
            <div className="ascii-title" aria-hidden="true">
              <span
                className="typing"
                style={{ "--delay": "0.1s", "--chars": "26", "--duration": "0.6s" }}
              >
                ┌─ GENERATIVE_CANVAS ─┐
              </span>
            </div>

            <p className="ascii-note" style={{ marginBottom: 32, textAlign: "center" }}>
              &gt; EXPERIMENT_02: PROCEDURAL PHYSICS &amp; VELOCITY VECTOR CANVAS
            </p>

            <div className="ascii-card" style={{ padding: "clamp(1rem, 3vw, 2rem)" }}>
              <GenerativeArt />
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 0", background: "var(--bg)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: "0.75rem", opacity: 0.6 }}>
          <span>© {new Date().getFullYear()} Aindra Moh — Lab Experiments</span>
          <Link to="/" style={{ textDecoration: "underline" }}>← Back to Home</Link>
        </div>
      </footer>
    </>
  );
}


