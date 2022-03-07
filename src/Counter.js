import React, { useContext } from 'react';
import NumContext from './NumContext';

const Counter = () => {
	const context = useContext(NumContext);
	const { count, handleCounter } = context;
	return (
		<div>
			<button onClick={handleCounter}>Increment</button>
			<div>{count}</div>
		</div>
	);
};

export default Counter;
