import React from 'react';
import './grid.css';

const Robots = (props) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
			{props.robotsList.map((robot, index) => {
				return (
					<img
						key={index}
						alt="some robot"
						src={`https://robohash.org/${robot}`}
						width="200"
						height="200"
					/>
				);
			})}
		</div>
	);
};

export default Robots;
