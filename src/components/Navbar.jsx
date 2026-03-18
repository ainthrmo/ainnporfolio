import { Link, useLocation } from "react-router-dom";
import { playBlip } from "../utils/sounds";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="ascii-navbar">
      <div className="container nav-inner">
        <Link 
          to="/" 
          className="logo-text" 
          onClick={() => playBlip(880, 0.02)}
        >
          Aindra_Moh
        </Link>

        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-btn ${isActive("/") ? "active" : ""}`}
            onMouseEnter={() => playBlip(880, 0.02)}
          >
            {isActive("/") ? "> HOME" : "HOME"}
          </Link>
          <Link 
            to="/projects" 
            className={`nav-btn ${isActive("/projects") ? "active" : ""}`}
            onMouseEnter={() => playBlip(880, 0.02)}
          >
            {isActive("/projects") ? "> PROJECTS" : "PROJECTS"}
          </Link>
          <Link 
            to="/about" 
            className={`nav-btn ${isActive("/about") ? "active" : ""}`}
            onMouseEnter={() => playBlip(880, 0.02)}
          >
            {isActive("/about") ? "> ABOUT" : "ABOUT"}
          </Link>
          <Link 
            to="/lab" 
            className={`nav-btn ${isActive("/lab") ? "active" : ""}`}
            onMouseEnter={() => playBlip(880, 0.02)}
          >
            {isActive("/lab") ? "> LAB" : "LAB"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
