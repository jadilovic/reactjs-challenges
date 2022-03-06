import React, { useState } from 'react';
import Robots from './Robots';

const FormTest = () => {
	const [text, setText] = useState('');
	const [robotsList, setRobotsList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		robotsList.push(text);
		setText('');
		setRobotsList(robotsList);
	};

	console.log(robotsList);
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>Find Robot</label>
				<br />
				<input
					name="robot"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<input type="submit" value="Enter" />
			</form>
			{text && (
				<img
					alt="missing robot"
					src={`https://robohash.org/${text}`}
					width="150"
				/>
			)}
			<Robots robotsList={robotsList} />
		</div>
	);
};

export default FormTest;
