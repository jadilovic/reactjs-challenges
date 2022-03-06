import React, { useState } from 'react';
import Robots from './Robots';

const FormRobot = () => {
	const [robotName, setRobotName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(robotName);
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label>Find Robot by Name</label>
				<br />
				<input
					name="robot"
					type="text"
					value={robotName}
					onChange={(e) => setRobotName(e.target.value)}
				/>
				<input type="submit" value="Enter" />
			</form>
			{robotName && (
				<img
					alt="Qries"
					src={`https://robohash.org/${robotName}`}
					width="150"
				/>
			)}
		</div>
	);
};

export default FormRobot;
