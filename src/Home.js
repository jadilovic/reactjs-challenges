import React from 'react';
import { Link } from 'react-router-dom';
import GetData from './GetData';

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Link to={'/robot1'}>Go to robots</Link>
			<br />
			<Link to={'/test2'}>Go to Test 2</Link>
			<br />
			<GetData />
		</>
	);
};

export default Home;
