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

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>City</th>
						<th>Latitude</th>
						<th>Longitude</th>
						<th>Country</th>
						<th>Post code</th>
						<th>State</th>
						<th>St Name</th>
						<th>St Number</th>
						<th>Timezone</th>
						<th>Offset</th>
					</tr>
				</thead>
				<tbody>
					{locations.map((local, index) => {
						return (
							<tr key={index}>
								<td>{local.city}</td>
								<td>{local.coordinates.latitude}</td>
								<td>{local.coordinates.longitude}</td>
								<td>{local.country}</td>
								<td>{local.postcode}</td>
								<td>{local.state}</td>
								<td>{local.street.name}</td>
								<td>{local.street.number}</td>
								<td>{local.timezone.description}</td>
								<td>{local.timezone.offset}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default GetData;
