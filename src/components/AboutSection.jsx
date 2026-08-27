export default function AboutSection() {
  return (
    <section id="about" className="section progressive" style={{ "--delay": "0.1s" }}>
      <div className="container">
        <div className="ascii-title" aria-hidden="true">
          <span
            className="typing"
            style={{ "--delay": "0.15s", "--chars": "15", "--duration": "0.6s" }}
          >
            ┌─ ABOUT_ME ─┐
          </span>
        </div>

        <div className="ascii-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="ascii-content" style={{ 
            whiteSpace: "pre-wrap", 
            fontFamily: "inherit", 
            fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
            lineHeight: "1.6",
            padding: "10px"
          }}>
            <span className="typing block" style={{ "--delay": "0.3s", "--chars": "50", "--duration": "1s" }}>
              [SYSTEM INFO]
            </span>
            <div style={{ opacity: 0.8 }} aria-hidden="true">
              --------------------------------------------------<br />
              USER: Designer + Developer + Product Builder<br />
              BORN: 2002<br />
              STACK: React, JavaScript, Supabase, Vite<br />
              THEME: Retro Digital / ASCII Aesthetics<br />
              --------------------------------------------------
            </div>

            
            <br />
            <span style={{ color: "var(--text)", fontWeight: "bold" }}>[MISSION]</span><br />
            I like figuring out why something should exist before building it.<br />
            I care about the user, the problem, and whether the product actually solves it.<br />
            Then I build the thing.<br />
            
            <br />
            <span style={{ color: "var(--text)", fontWeight: "bold" }}>[PHILOSOPHY]</span><br />
            - Understand the problem before touching the keyboard.<br />
            - Mobile-first, always. UX is not a phase — it's the whole point.<br />
            - I like experiments. Not everything ships. That's fine.<br />
            - Retro-Future Vibe: old CLI soul, modern web technology.<br />
            
            <br />
            <span style={{ color: "var(--text)", fontWeight: "bold" }}>[CURRENT FOCUS]</span><br />
            - MOSSQR (visual food-discovery SaaS for restaurants)<br />
            - Sneaker Studio ABN (e-commerce UI/UX)<br />
            
            <br />
            <span style={{ color: "var(--text)", fontWeight: "bold" }}>[STATUS]</span><br />
            Idea → Design → Build. That's the loop.<br />
            Open to projects where the problem is worth solving.<br />
            --------------------------------------------------
          </div>
        </div>
      </div>
    </section>
  );
}


