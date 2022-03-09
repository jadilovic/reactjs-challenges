import React from 'react';
import { Link } from 'react-router-dom';
import GetData from './GetData';

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Link to={'/robot1'}>Go to robots</Link>
			<GetData />
		</>
	);
};

export default Home;
