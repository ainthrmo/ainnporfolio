import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Lab from "./pages/Lab";
import MossqrCaseStudy from "./pages/MossqrCaseStudy";
import GreetingAlert from "./components/GreetingAlert";

export default function App() {
  return (
    <Router>
      <div className="perspective-bg">
        <div className="grid-floor"></div>
      </div>
      <Navbar />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/mossqr" element={<MossqrCaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
