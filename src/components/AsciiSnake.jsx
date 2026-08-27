import { useState, useEffect, useCallback, useRef } from "react";
import { playBlip } from "../utils/sounds";

const getGridSize = () => (window.innerWidth < 480 ? 20 : 30);
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function AsciiSnake() {
  const [gridSize, setGridSize] = useState(getGridSize());
  
  // Define visible dimensions
  const width = gridSize - 4;
  const height = gridSize - 2;

  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [lowPowerMode, setLowPowerMode] = useState(false);
  const gameLoopRef = useRef();

  // Initialize snake based on visible dimensions
  useEffect(() => {
    const midX = Math.floor(width / 2);
    const midY = Math.floor(height / 2);
    setSnake([{ x: midX, y: midY }, { x: midX, y: midY + 1 }, { x: midX, y: midY + 2 }]);
  }, [width, height]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newSize = getGridSize();
      if (newSize !== gridSize) {
        setGridSize(newSize);
        setIsGameOver(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gridSize]);

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      };
      if (!snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) break;
    }
    return newFood;
  }, [snake, width, height]);

  const resetGame = () => {
    const midX = Math.floor(width / 2);
    const midY = Math.floor(height / 2);
    setSnake([{ x: midX, y: midY }, { x: midX, y: midY + 1 }, { x: midX, y: midY + 2 }]);
    setDirection(INITIAL_DIRECTION);
    setFood({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height) });
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    playBlip(660, 0.05, 0.2);
  };

  const moveSnake = useCallback(() => {
    if (isPaused || isGameOver || snake.length === 0) return;

    setSnake((prevSnake) => {
      const head = { x: prevSnake[0].x + direction.x, y: prevSnake[0].y + direction.y };

      // Wall collision using visible dimensions
      if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
        setIsGameOver(true);
        playBlip(220, 0.1, 0.5);
        return prevSnake;
      }

      if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setIsGameOver(true);
        playBlip(220, 0.1, 0.5);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood());
        playBlip(880, 0.05, 0.1);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, isGameOver, isPaused, generateFood, width, height, snake.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp": if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case "ArrowDown": if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case "ArrowLeft": if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case "ArrowRight": if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
        case " ": setIsPaused(p => !p); break;
        default: break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const interval = lowPowerMode ? 400 : 200;
    gameLoopRef.current = setInterval(moveSnake, interval);
    return () => clearInterval(gameLoopRef.current);
  }, [moveSnake, lowPowerMode]);

  const renderGrid = () => {
    if (snake.length === 0) return null;
    let grid = "";
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const isSnakeHead = snake[0].x === x && snake[0].y === y;
        const isSnakeBody = snake.some((s, i) => i !== 0 && s.x === x && s.y === y);
        const isFood = food.x === x && food.y === y;

        if (isSnakeHead) grid += "■";
        else if (isSnakeBody) grid += "□";
        else if (isFood) grid += "@";
        else grid += "·";
        
        if (x < width - 1) grid += " ";
      }
      grid += "\n";
    }
    return grid;
  };




  return (
    <div className="ascii-card game-container progressive" style={{ maxWidth: "100%", padding: 0 }}>
      <div className="game-header">
        <span>[ SYSTEM_SNAKE_v1.1 ]</span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <label style={{ fontSize: "0.6rem", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
            <input 
              type="checkbox" 
              checked={lowPowerMode} 
              onChange={() => setLowPowerMode(!lowPowerMode)} 
              style={{ accentColor: "var(--text)" }}
            />
            LP_MODE
          </label>
          <span>SCORE: {score.toString().padStart(4, "0")}</span>
        </div>
      </div>
      
      <div className="game-screen" style={{ overflow: "hidden", padding: "10px 15px" }}>
        {isGameOver ? (
          <div className="game-overlay">
            <h2 className="glitch">GAME OVER</h2>
            <div style={{ fontSize: "0.9rem", color: "var(--text)", letterSpacing: "0.3em" }}>
              [ FINAL_SCORE: {score.toString().padStart(4, "0")} ]
            </div>
            <button className="btn" onClick={resetGame}>[ REBOOT_SYSTEM ]</button>
          </div>
        ) : isPaused ? (
          <div className="game-overlay">
            <h2>SYSTEM_PAUSED</h2>
            <button className="btn" onClick={() => setIsPaused(false)}>[ RESUME_PROCESS ]</button>
          </div>
        ) : null}
        <pre className="game-grid" style={{ 
          fontSize: gridSize === 20 ? "clamp(0.6rem, 3.5vw, 1.1rem)" : "clamp(0.45rem, 2.2vw, 0.85rem)",
          lineHeight: "1.1",
          margin: "0 auto",
          display: "block",
          textAlign: "center",
          opacity: 0.9
        }}>
          {renderGrid()}
        </pre>
      </div>




      <div className="mobile-controls">
        <div className="control-row">
          <button 
            className="ctrl-btn" 
            onClick={() => {
              if (direction.y === 0) setDirection({ x: 0, y: -1 });
              playBlip(880, 0.02);
            }}
          >▲</button>
        </div>
        <div className="control-row">
          <button 
            className="ctrl-btn" 
            onClick={() => {
              if (direction.x === 0) setDirection({ x: -1, y: 0 });
              playBlip(880, 0.02);
            }}
          >◄</button>
          <button 
            className="ctrl-btn pause" 
            onClick={() => {
              setIsPaused(p => !p);
              playBlip(440, 0.05);
            }}
          >{isPaused ? "▶" : "Ⅱ"}</button>
          <button 
            className="ctrl-btn" 
            onClick={() => {
              if (direction.x === 0) setDirection({ x: 1, y: 0 });
              playBlip(880, 0.02);
            }}
          >►</button>
        </div>
        <div className="control-row">
          <button 
            className="ctrl-btn" 
            onClick={() => {
              if (direction.y === 0) setDirection({ x: 0, y: 1 });
              playBlip(880, 0.02);
            }}
          >▼</button>
        </div>
      </div>

      <div className="game-footer">
        <span className="hide-mobile">KEYS: ARROWS TO MOVE | SPACE TO PAUSE</span>
        <span className="show-mobile">TOUCH CONTROLS ACTIVE | {gridSize}x{gridSize}</span>
      </div>
    </div>
  );
}

