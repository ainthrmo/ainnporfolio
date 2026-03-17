export default function Home() {
  return (
    <main>
      <section className="section">
        <div className="container hero-shell progressive" style={{ "--delay": "0s" }}>
          <div className="hero-console">
            <span
              className="typing"
              style={{ "--delay": "0s", "--chars": "36", "--duration": "1.2s" }}
            >
              &gt; running ./portfolio --theme=ascii
            </span>
            <span
              className="typing"
              style={{ "--delay": "0.18s", "--chars": "32", "--duration": "1s" }}
            >
              &gt; system: midnight monochrome
            </span>
          </div>
          <h1 className="hero-title typing" style={{ "--delay": "0.3s", "--chars": "20" }}>
            Aindra Moh
          </h1>
          <p className="ascii-note" style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="typing block" style={{ "--delay": "0.45s", "--chars": "54" }}>
              Junior frontend engineer building statement pieces in pure black-and-white.
            </span>
            <span className="typing block" style={{ "--delay": "0.62s", "--chars": "66" }}>
              I enjoy reducing complexity until every interaction feels like typing on a familiar terminal.
            </span>
          </p>
          <div className="hero-actions">
            <a className="btn" href="mailto:wanderertidal@email.com">
              Email
            </a>
            <a className="btn" href="https://github.com/ainthrmo" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section progressive" style={{ "--delay": "0.4s" }}>
        <div className="container">
          <div className="ascii-title">
            <span
              className="typing"
              style={{ "--delay": "0.42s", "--chars": "16", "--duration": "0.9s" }}
            >
              ┌─ CONTACT ─┐
            </span>
          </div>

          <div className="contact-card progressive" style={{ "--delay": "0.44s" }}>
            <p className="ascii-note" style={{ margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="typing block" style={{ "--delay": "0.46s", "--chars": "74" }}>
                Want to collaborate or need a clean build shipped with precision?
              </span>
              <span className="typing block" style={{ "--delay": "0.54s", "--chars": "50" }}>
                Drop a line.
              </span>
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn" href="mailto:wanderertidal@email.com">
                Email
              </a>
              <a className="btn" href="https://github.com/ainthrmo" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
