import React, { useState } from 'react';
import ticTacWinner from './ticTacWinner';
import './Board.css';

const TicTac = () => {
	const [squares, setSquares] = useState(new Array(9).fill(null));
	const [isX, setIsX] = useState(true);

	const handleClick = (i) => {
		if (ticTacWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = isX ? 'X' : 'O';
		setSquares(squares);
		setIsX(!isX);
	};

	const winner = ticTacWinner(squares);
	let status;

	if (winner) {
		status = `Winner is: ${winner}`;
	} else {
		status = `Next player: ${isX ? 'X' : 'O'}`;
	}

	const startNewGame = () => {
		setSquares(new Array(9).fill(null));
		setIsX(true);
	};

	console.log(winner);
	return (
		<>
			<h1>Tic Tac Toe</h1>
			<div className="board">
				{squares.map((square, index) => {
					return (
						<button
							className="square"
							key={index}
							onClick={() => handleClick(index)}
						>
							{square}
						</button>
					);
				})}
			</div>
			<div>{status}</div>
			<div>
				<button onClick={startNewGame}>Restart</button>
			</div>
		</>
	);
};

export default TicTac;
