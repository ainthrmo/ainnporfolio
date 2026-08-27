import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { playBlip } from "../utils/sounds";

export default function MossqrCaseStudy() {
  return (
    <>
      <SEO
        title="MOSSQR Case Study — Aindra Moh"
        description="Case study on MOSSQR: turning restaurant menus into a visual selling experience. Product thinking, UX design, and engineering by Aindra Moh."
        path="/projects/mossqr"
      />
      <main>
        {/* CASE STUDY HERO */}
        <section className="section" id="mossqr-hero">
          <div className="container hero-shell progressive" style={{ "--delay": "0s" }}>
            <div style={{ fontSize: "0.7rem", opacity: 0.5, marginBottom: 12, display: "flex", justifyContent: "space-between" }} aria-hidden="true">
              <span>Case Study — MOSSQR</span>
              <span>[ _ □ x ]</span>
            </div>
            <div className="hero-console" aria-hidden="true">
              <span className="typing" style={{ "--delay": "0s", "--chars": "40", "--duration": "0.8s" }}>
                &gt; loading ./projects/mossqr --mode=casestudy
              </span>
              <span className="typing" style={{ "--delay": "0.2s", "--chars": "30", "--duration": "0.6s" }}>
                &gt; status: MVP / BUILDING
              </span>
            </div>

            <h1 className="hero-title typing" style={{ "--delay": "0.3s", "--chars": "8" }}>
              MOSSQR
            </h1>
            <p className="ascii-note" style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="typing block" style={{ "--delay": "0.4s", "--chars": "60" }}>
                Turning restaurant menus into a visual selling experience.
              </span>
            </p>

            <div className="hero-actions">
              <Link
                to="/"
                className="btn"
                onMouseEnter={() => playBlip(660, 0.02)}
              >
                ← Back
              </Link>
            </div>
          </div>
        </section>


      {/* THE PROBLEM */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "18", "--duration": "0.6s" }}>
              ┌─ THE_PROBLEM ─┐
            </span>
          </div>

          <div className="ascii-card" style={{ maxWidth: "760px" }}>
            <p className="ascii-note">
              Traditional menus often make unfamiliar dishes difficult to understand.
            </p>
            <p className="ascii-note" style={{ marginTop: 12 }}>
              A customer sees a dish name — maybe in another language, maybe something they've never heard of — with no idea what it actually looks like. So they play it safe. They order what they already know.
            </p>
            <p className="ascii-note" style={{ marginTop: 12 }}>
              Restaurants also deal with constantly changing prices, seasonal dishes, and daily specials — which means reprinting menus regularly, often at a cost they'd rather avoid.
            </p>
            <div style={{ marginTop: 20, padding: "12px 16px", borderLeft: "3px solid var(--border)", opacity: 0.8 }}>
              <p className="ascii-note" style={{ margin: 0, fontSize: "0.85rem" }}>
                &gt; The customer doesn't discover. The restaurant doesn't sell the food it's most proud of. Both sides lose something.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE INSIGHT */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "18", "--duration": "0.6s" }}>
              ┌─ THE_INSIGHT ─┐
            </span>
          </div>

          <div className="ascii-card" style={{ maxWidth: "760px" }}>
            <p className="ascii-note">
              A menu shouldn't only <em>list</em> food.
            </p>
            <p className="ascii-note" style={{ marginTop: 12 }}>
              It should help <strong>sell</strong> the food.
            </p>
            <div style={{ marginTop: 20, padding: "16px 20px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
              <p className="ascii-note" style={{ margin: 0, fontSize: "1rem", fontWeight: "bold", letterSpacing: "0.05em" }}>
                Make the food easier to understand,<br />
                easier to discover,<br />
                easier to want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CONCEPT — PRODUCT JOURNEY */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "18", "--duration": "0.6s" }}>
              ┌─ THE_CONCEPT ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p className="ascii-note" style={{ marginBottom: 32 }}>
              MOSSQR puts visual food discovery directly into the moment when customers are deciding what to order. No app download. Just a QR code on the table.
            </p>

            <div className="ascii-card">
              <p style={{ fontSize: "0.6rem", opacity: 0.5, marginBottom: 8, letterSpacing: "0.2em" }}>CUSTOMER JOURNEY</p>
              <div className="mossqr-journey mossqr-journey--large">
                <span className="mossqr-step">Scan QR</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">Browse Menu</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">See the Dish</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">Discover Something New</span>
                <span className="mossqr-arrow">→</span>
                <span className="mossqr-step">Order</span>
              </div>
            </div>

            <p className="ascii-note" style={{ marginTop: 24, opacity: 0.7 }}>
              The menu lives on the customer's phone. The restaurant controls what's on it.
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL FOOD EXPERIENCE */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "26", "--duration": "0.6s" }}>
              ┌─ VISUAL_FOOD_EXPERIENCE ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p className="ascii-note" style={{ marginBottom: 20 }}>
              The visual element is central to the product — but the goal isn't perfect AI food photography.
            </p>
            <div style={{ padding: "16px 20px", border: "1px solid var(--border)", marginBottom: 24, background: "rgba(255,255,255,0.02)" }}>
              <p className="ascii-note" style={{ margin: 0, fontWeight: "bold" }}>
                Make the food visually appealing enough to communicate its real character — while remaining believable and trustworthy.
              </p>
            </div>
            <p className="ascii-note">
              A customer doesn't need a magazine-quality image. They need enough visual context to feel confident about trying something unfamiliar.
            </p>

            <div className="ascii-card" style={{ marginTop: 24 }}>
              <p style={{ fontSize: "0.6rem", opacity: 0.5, marginBottom: 8, letterSpacing: "0.2em" }}>[ STATUS: IN DEVELOPMENT ]</p>
              <p className="ascii-note" style={{ margin: 0 }}>
                AI-assisted food visuals are part of the product direction. This feature is being developed as part of the MVP iteration — not presented as fully shipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU MANAGEMENT */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "22", "--duration": "0.6s" }}>
              ┌─ MENU_MANAGEMENT ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p className="ascii-note" style={{ marginBottom: 24 }}>
              Restaurant owners can manage their menus without reprinting anything.
            </p>
            <div className="ascii-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              {[
                { label: "UPDATE_PRICES", desc: "Change dish prices instantly" },
                { label: "ADD_REMOVE", desc: "Add or remove dishes from the menu" },
                { label: "EDIT_DESCRIPTIONS", desc: "Update descriptions as the recipe changes" },
                { label: "DAILY_SPECIALS", desc: "Set and remove specials without reprinting" },
                { label: "LIVE_UPDATES", desc: "Changes reflect immediately for customers" },
              ].map((item) => (
                <div key={item.label} className="ascii-card" style={{ gap: 8 }}>
                  <div style={{ fontSize: "0.6rem", opacity: 0.5, letterSpacing: "0.2em" }}>
                    [ {item.label} ]
                  </div>
                  <p className="ascii-note" style={{ margin: 0, fontSize: "0.85rem" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "20", "--duration": "0.6s" }}>
              ┌─ DESIGN_PROCESS ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p className="ascii-note" style={{ marginBottom: 32 }}>
              The product didn't start as a visual food-discovery platform. It started much simpler — and became something bigger through thinking about the actual problem.
            </p>

            <div className="ascii-card">
              <p style={{ fontSize: "0.6rem", opacity: 0.5, marginBottom: 16, letterSpacing: "0.2em" }}>PRODUCT EVOLUTION</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { version: "v0.1", label: "QR Menu", note: "Put the menu online. Scan to view." },
                  { version: "v0.2", label: "Digital Menu", note: "Make it nicer. Add categories and search." },
                  { version: "v0.3", label: "Food Discovery", note: "Add images. Let people see what they're ordering." },
                  { version: "v1.0", label: "Visual Selling Experience", note: "The menu as a tool to communicate the food, not just list it.", highlight: true },
                ].map((step, i) => (
                  <div key={step.version} style={{
                    borderLeft: `3px solid ${step.highlight ? "var(--border)" : "rgba(255,255,255,0.2)"}`,
                    paddingLeft: 20,
                    paddingBottom: i === 3 ? 0 : 24,
                    opacity: step.highlight ? 1 : 0.6,
                  }}>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: 4 }}>
                      {step.version} / {step.label}
                    </div>
                    <p className="ascii-note" style={{ margin: 0, fontSize: "0.85rem" }}>
                      {step.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 28, padding: "16px 20px", borderLeft: "3px solid var(--border)" }}>
              <p className="ascii-note" style={{ margin: 0, opacity: 0.9 }}>
                &gt; I didn't start by trying to build a restaurant POS. I started with a QR code and a menu.<br /><br />
                Through thinking about what the customer actually experiences at the table, the idea evolved into something more: a visual food-discovery product.<br /><br />
                The menu is not only there to list what's available. It should help customers feel confident enough to discover something new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "18", "--duration": "0.6s" }}>
              ┌─ TECHNOLOGY ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p className="ascii-note" style={{ marginBottom: 24, opacity: 0.7 }}>
              Technologies currently in use in the MOSSQR implementation:
            </p>
            <div className="tag-row">
              {["Next.js", "React", "Supabase", "Vercel"].map((tech) => (
                <span key={tech} className="tag" style={{ fontSize: "0.75rem", padding: "6px 14px" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS THINKING */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "22", "--duration": "0.6s" }}>
              ┌─ BUSINESS_THINKING ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p className="ascii-note" style={{ marginBottom: 24 }}>
              The business hypothesis for MOSSQR is honest and straightforward:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="ascii-card">
                <div style={{ fontSize: "0.6rem", opacity: 0.5, letterSpacing: "0.2em", marginBottom: 8 }}>[ VALUE_1 / RESTAURANT_OWNER ]</div>
                <p className="ascii-note" style={{ margin: 0 }}>
                  Make menu updates easier. No reprinting. No design fees. Update prices, dishes, and specials in real time from a dashboard.
                </p>
              </div>
              <div className="ascii-card">
                <div style={{ fontSize: "0.6rem", opacity: 0.5, letterSpacing: "0.2em", marginBottom: 8 }}>[ VALUE_2 / CUSTOMER ]</div>
                <p className="ascii-note" style={{ margin: 0 }}>
                  Help customers discover unfamiliar dishes through better visual presentation. Reduce hesitation. Increase confidence in ordering.
                </p>
              </div>
            </div>

            <div className="ascii-card" style={{ marginTop: 24, borderColor: "rgba(255,255,255,0.3)" }}>
              <p style={{ fontSize: "0.6rem", opacity: 0.5, letterSpacing: "0.2em", marginBottom: 8 }}>[ HONEST_DISCLAIMER ]</p>
              <p className="ascii-note" style={{ margin: 0, opacity: 0.8 }}>
                No revenue numbers, conversion rates, or restaurant counts are presented here. The product is in early-stage MVP. Real-world data is the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET VALIDATION */}
      <section className="section progressive" style={{ "--delay": "0.1s" }}>
        <div className="container">
          <div className="ascii-title" aria-hidden="true">
            <span className="typing" style={{ "--delay": "0.15s", "--chars": "24", "--duration": "0.6s" }}>
              ┌─ MARKET_VALIDATION ─┐
            </span>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <div className="ascii-card">
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", opacity: 0.5, marginBottom: 12 }}>
                [ STATUS: ONGOING ]
              </div>
              <p className="ascii-note" style={{ marginBottom: 20 }}>
                MOSSQR is currently moving from product building into real-world validation with restaurant owners.
              </p>
              <p className="ascii-note" style={{ opacity: 0.7, marginBottom: 20 }}>
                This section will be updated as validation progresses. Metrics and feedback will be added when they exist, not before.
              </p>
              <p style={{ fontSize: "0.6rem", opacity: 0.5, letterSpacing: "0.2em" }}>PENDING DATA POINTS:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                {[
                  "Restaurant owner interviews",
                  "Number of restaurants using MOSSQR",
                  "Paying customers",
                  "Customer feedback on menu experience",
                  "Menu interaction data",
                  "Conversion and ordering patterns",
                ].map((item) => (
                  <div key={item} style={{ fontSize: "0.8rem", opacity: 0.5, display: "flex", gap: 8 }}>
                    <span>[ _ ]</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACK NAVIGATION */}
      <section className="section progressive" style={{ "--delay": "0.1s", minHeight: "auto", padding: "60px 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              to="/"
              className="btn"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              ← Back to Home
            </Link>
            <Link
              to="/projects"
              className="btn"
              onMouseEnter={() => playBlip(660, 0.02)}
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>

    <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 0", background: "var(--bg)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: "0.75rem", opacity: 0.6 }}>
        <span>© {new Date().getFullYear()} Aindra Moh — MOSSQR Case Study</span>
        <Link to="/projects" style={{ textDecoration: "underline" }}>← Back to Projects</Link>
      </div>
    </footer>
  </>
  );
}

