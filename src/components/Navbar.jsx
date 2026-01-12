export default function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      backdropFilter: "blur(10px)",
      background: "rgba(11,11,15,0.8)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      zIndex: 10
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60
      }}>
        <strong>Aindra Moh</strong>

        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
