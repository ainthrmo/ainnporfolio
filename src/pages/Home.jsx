export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="section" style={{ borderTop: "none" }}>
        <div className="container">
          <p style={{ color: "var(--muted)", margin: 0 }}>Junior Developer • Frontend</p>
          <h1 className="h1">I build clean, responsive web apps.</h1>
          <p className="p">
            I’m [Your Name]. I focus on React, UI, and practical projects. This portfolio shows what I can build.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn" href="#contact">Contact</a>
            <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <h2 style={{ margin: "0 0 14px" }}>Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            <div className="card">Project 1 (placeholder)</div>
            <div className="card">Project 2 (placeholder)</div>
            <div className="card">Project 3 (placeholder)</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h2 style={{ margin: "0 0 10px" }}>About</h2>
          <p className="p">
            Short story about you. What you’re learning now. What roles you want. Keep it simple and confident.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2 style={{ margin: "0 0 10px" }}>Contact</h2>
          <p className="p">Email me at: <a href="mailto:you@email.com" style={{ textDecoration: "underline" }}>you@email.com</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="container" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Your Name
        </div>
      </footer>
    </main>
  );
}
