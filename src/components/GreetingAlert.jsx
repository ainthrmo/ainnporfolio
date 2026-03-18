import { useState, useEffect } from "react";
import { playBlip } from "../utils/sounds";

export default function GreetingAlert() {
  const [isOpen, setIsOpen] = useState(false);
  const greeting = "WELCOME TO AINTHRMO'S PORTFOLIO. I HOPE YOU HAVE FUN EXPLORING THIS PROJECT.";

  useEffect(() => {
    // Show alert after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      playBlip(440, 0.1, 0.2); // Alert sound
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box progressive">
        <div className="alert-header">
          <span>[ SYSTEM_MESSAGE ]</span>
          <button 
            className="alert-close" 
            onClick={() => {
              setIsOpen(false);
              playBlip(440, 0.05);
            }}
          >×</button>
        </div>
        <div className="alert-body">
          <p 
            className="typing block" 
            style={{ 
              "--chars": greeting.length, 
              "--duration": "1.2s",
              fontSize: "0.8rem",
              lineHeight: "1.6"
            }}
          >
            &gt; {greeting}
          </p>
          <button 
            className="btn" 
            style={{ marginTop: 20, width: "100%", fontSize: "0.65rem" }} 
            onClick={() => {
              setIsOpen(false);
              playBlip(660, 0.05);
            }}
          >
            [ ACKNOWLEDGE ]
          </button>
        </div>
      </div>
    </div>
  );
}
