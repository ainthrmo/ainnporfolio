export default function About() {
  return (
    <main>
      <section id="about" className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title">
            <span
              className="typing"
              style={{ "--delay": "0.12s", "--chars": "15", "--duration": "0.9s" }}
            >
              ┌─ ABOUT ─┐
            </span>
          </div>

          <div className="about-grid">
            <div className="ascii-card progressive" style={{ "--delay": "0.2s" }}>
              <h3 style={{ margin: 0 }}>Who Am I</h3>
              <p className="ascii-note" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="typing block" style={{ "--delay": "0.22s", "--chars": "62" }}>
                  Hello! I'm a web developer born in 2002, focusing on modern web technologies. This year I'm mainly targeting from building simple web structures to developing complex web applications.
                </span>
                 
              </p>
            </div>

            <div className="ascii-card progressive" style={{ "--delay": "0.26s" }}>
              <h3 style={{ margin: 0 }}>Skills</h3>
              <div className="ascii-list" style={{ marginTop: 16 }}>
                <div>
                  <h4>Frontend</h4>
                  <p>React · Vite · Responsive CSS</p>
                </div>
                <div>
                  <h4>Tools</h4>
                  <p>Git · npm · VS Code</p>
                </div>
                <div>
                  <h4>Learning</h4>
                  <p>TypeScript · APIs · Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
