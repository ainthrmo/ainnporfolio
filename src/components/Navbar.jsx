import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="ascii-navbar">
      <div className="container nav-inner">
        <strong className="logo-text">Aindra Moh</strong>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
        </nav>
      </div>
    </header>
  );
}
