export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.10)", background: "rgba(11,11,15,0.75)", zIndex: 10 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
        <a href="#top" style={{ fontWeight: 700, letterSpacing: 0.2 }}>YourName</a>

        <nav style={{ display: "flex", gap: 14 }}>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
