import { useState, useEffect } from "react";
import "./Box1.css";

function Box1() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xnext, setXnext] = useState(true);
  const [color, setColor] = useState("red");

  const win = () => {
    setColor(getRandomColor1());
  };

  useEffect(() => {
    const clock = setInterval(() => win(), 1000);

    return () => clearInterval(clock);
  }, []);

  function getRandomColor1() {
    const colors = ["red", "blue", "rgb(13, 230, 13)", "rgb(255, 251, 19)"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = xnext ? "X" : "O";
    setBoard(newBoard);
    setXnext(!xnext);
  };

  const renderSquare = (index) => (
    <button className="sqr" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xnext ? "X" : "O"}`;

  return (
    <>
      <h1 className="sht">
        Winner:{" "}
        <span className="sht1" style={{ color: color }}>
          {" "}
          {winner}
        </span>
      </h1>

      <div className="shot">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}

export default Box1;
