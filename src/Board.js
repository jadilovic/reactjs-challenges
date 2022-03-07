import React from 'react';
import calculateWinner from './calculateWinner';
import Square from './Square';
import './Board.css';

function Board() {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [isX, setIsX] = React.useState(true);

	console.log(squares);

	const handleClick = (i) => {
		console.log(squares[i]);
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = isX ? 'X' : 'O';
		setSquares(squares);
		setIsX(!isX);
	};

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `Winner: ${winner}`;
	} else {
		status = 'Next player: ' + (isX ? 'X' : 'O');
	}

	const handleRestart = () => {
		setIsX(true);
		setSquares(Array(9).fill(null));
	};

	const renderSquare = (i) => {
		return <Square value={squares[i]} onClick={() => handleClick(i)} />;
	};

	return (
		<div className="board">
			{squares.map((square, index) => {
				return <div className="square">{renderSquare(index)}</div>;
			})}
			<div className="status">{status}</div>
			<button className="restart" onClick={handleRestart}>
				Restart Game!
			</button>
		</div>
	);
}

export default Board;
