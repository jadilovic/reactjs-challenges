import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = () => {
	const [locations, setLocations] = useState([]);

	const extractLocations = (usersInfo) => {
		const locationsArr = [];
		usersInfo.forEach((user) => {
			locationsArr.push(user.location);
		});
		setLocations([...locationsArr]);
	};

	const getUser = async () => {
		const response = await axios.get('https://randomuser.me/api/?results=20');
		extractLocations(response.data.results);
	};

	useEffect(() => {
		getUser();
	}, []);

	console.log(locations);

	return <div>GetData</div>;
};

export default GetData;
