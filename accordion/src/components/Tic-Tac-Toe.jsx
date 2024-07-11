import React, { useEffect, useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const Square = ({ value, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-28 h-28 border-b-fuchsia-400 text-2xl"
      >
        {value}
      </button>
    );
  };

  const getWinner = (squares) => {
    const winningPaterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winningPaterns.length; i++) {
      const [x, y, z] = winningPaterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleClick = (getCurrentSquare) => {
    const copySqrs = [...squares];
    if (getWinner(copySqrs) || copySqrs[getCurrentSquare]) return;
    copySqrs[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXTurn(!isXturn);
    setSquares(copySqrs);
  };

  const handleReset = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("It's a Draw. Please Restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please Restart the game`);
    } else {
      setStatus(`Next Player is ${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);

  return (
    <div className="flex gap-2 flex-col items-center justify-center">
      <div className="flex gap-2">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="flex gap-2">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="flex gap-2">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div>{status}</div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default TicTacToe;
