import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAPI = () => {
	const [comments, setComments] = useState([]);
	const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

	const getData = async () => {
		const response = await axios.get(url);
		console.log(response.data);
		setComments([...response.data]);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<ul>
				{comments.map((item) => {
					return (
						<div key={item.id}>
							<li>Id: {item.id}</li>
							<li>Name: {item.name}</li>
							<li>Email: {item.email}</li>
							<hr />
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default GetAPI;
