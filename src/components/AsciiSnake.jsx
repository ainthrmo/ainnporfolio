import { useState, useEffect, useCallback, useRef } from "react";
import { playBlip } from "../utils/sounds";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }, { x: 10, y: 11 }, { x: 10, y: 12 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function AsciiSnake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const gameLoopRef = useRef();

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // Ensure food doesn't spawn on snake
      if (!snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) break;
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    playBlip(660, 0.05, 0.2);
  };

  const moveSnake = useCallback(() => {
    if (isPaused || isGameOver) return;

    setSnake((prevSnake) => {
      const head = { x: prevSnake[0].x + direction.x, y: prevSnake[0].y + direction.y };

      // Wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setIsGameOver(true);
        playBlip(220, 0.1, 0.5);
        return prevSnake;
      }

      // Self collision
      if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setIsGameOver(true);
        playBlip(220, 0.1, 0.5);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      // Food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood());
        playBlip(880, 0.05, 0.1);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, isGameOver, isPaused, generateFood]);

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
    gameLoopRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(gameLoopRef.current);
  }, [moveSnake]);

  const renderGrid = () => {
    let grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      let row = "";
      for (let x = 0; x < GRID_SIZE; x++) {
        const isSnakeHead = snake[0].x === x && snake[0].y === y;
        const isSnakeBody = snake.some((s, i) => i !== 0 && s.x === x && s.y === y);
        const isFood = food.x === x && food.y === y;

        if (isSnakeHead) row += "■ ";
        else if (isSnakeBody) row += "□ ";
        else if (isFood) row += "@ ";
        else row += ". ";
      }
      grid.push(<div key={y}>{row}</div>);
    }
    return grid;
  };

  return (
    <div className="ascii-card game-container progressive">
      <div className="game-header">
        <span>[ SYSTEM_SNAKE_v1.0 ]</span>
        <span>SCORE: {score.toString().padStart(4, "0")}</span>
      </div>
      
      <div className="game-screen">
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
        <pre className="game-grid">{renderGrid()}</pre>
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
        <span className="show-mobile">TOUCH CONTROLS ACTIVE</span>
      </div>
    </div>
  );
}
