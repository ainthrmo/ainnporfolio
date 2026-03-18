import AsciiSnake from "../components/AsciiSnake";

export default function Lab() {
  return (
    <section className="section">
      <div className="container">
        <div className="ascii-title">
          <span
            className="typing"
            style={{ "--delay": "0.1s", "--chars": "20", "--duration": "0.6s" }}
          >
            ┌─ SYSTEM_LAB ─┐
          </span>
        </div>
        
        <p className="ascii-note" style={{ marginBottom: 32, textAlign: "center" }}>
          &gt; EXPERIMENTAL MODULE DETECTED. PROCEED WITH CAUTION.
        </p>

        <AsciiSnake />
      </div>
    </section>
  );
}
