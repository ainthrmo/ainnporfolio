import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <>
      <SEO
        title="About — Aindra Moh"
        description="Background, product thinking philosophy, and design and engineering focus of Aindra Moh, Designer & Developer."
        path="/about"
      />
      <main>
        <AboutSection />
        
        {/* TIMELINE SECTION */}
        <section className="section progressive" style={{ "--delay": "0.1s" }}>
          <div className="container">
            <div className="ascii-title">
              <span className="typing" style={{ "--delay": "0.15s", "--chars": "18", "--duration": "0.6s" }}>
                ┌─ TIMELINE ─┐
              </span>
            </div>
            
            <div className="ascii-list" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div className="ascii-card" style={{ borderLeft: "4px solid var(--border)" }}>
                <h4 style={{ opacity: 1, fontSize: "0.9rem" }}>2025 - PRESENT // BUILDING MOSSQR</h4>
                <p>Designing and building MOSSQR — a visual food-discovery SaaS for restaurants. Product thinking, UX, and full-stack implementation from a single person.</p>
              </div>
              
              <div style={{ paddingLeft: "20px", borderLeft: "2px dashed var(--border)", margin: "10px 0", height: "30px", opacity: 0.3 }}></div>
              
              <div className="ascii-card" style={{ borderLeft: "4px solid var(--border)" }}>
                <h4 style={{ opacity: 1, fontSize: "0.9rem" }}>2024 - 2025 // FREELANCE &amp; LEARNING</h4>
                <p>Building client projects, exploring modern React patterns, and developing a sense of what makes products actually work for users — not just what makes them look good.</p>
              </div>

              <div style={{ paddingLeft: "20px", borderLeft: "2px dashed var(--border)", margin: "10px 0", height: "30px", opacity: 0.3 }}></div>

              <div className="ascii-card" style={{ borderLeft: "4px solid var(--border)" }}>
                <h4 style={{ opacity: 1, fontSize: "0.9rem" }}>2022 - 2024 // FOUNDATIONS</h4>
                <p>Self-taught and formal Computer Science fundamentals. JavaScript, React, Vite, UI/UX design patterns. Learning to build things people actually use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW I THINK */}
        <section className="section progressive" style={{ "--delay": "0.2s" }}>
          <div className="container">
            <div className="ascii-title">
              <span className="typing" style={{ "--delay": "0.25s", "--chars": "20", "--duration": "0.6s" }}>
                ┌─ HOW_I_THINK ─┐
              </span>
            </div>
            <div className="ascii-grid">
              <div className="ascii-card">
                <h3>Problem First</h3>
                <p>I try to understand what's actually broken before writing any code. The best solution is sometimes not building anything.</p>
              </div>
              <div className="ascii-card">
                <h3>Design as Thinking</h3>
                <p>Design is how you figure out what to build, not just how it looks. UX is not a final step — it shapes everything before the first component.</p>
              </div>
              <div className="ascii-card">
                <h3>Ship, Learn, Iterate</h3>
                <p>Not everything works. The important thing is finding out quickly and adjusting. Perfect at version one usually means never shipped.</p>
              </div>
            </div>
          </div>
        </section>
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

