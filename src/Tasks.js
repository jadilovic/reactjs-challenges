import React, { useState } from 'react';
import List from './List';

const Tasks = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		list.push(value);
		setList([...list]);
		setValue('');
	};

	console.log(list);
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>Enter item name</label>
				<input
					value={value}
					type="text"
					onChange={(e) => setValue(e.target.value)}
				/>
				<input type="submit" value="submit" />
			</form>
			<List list={list} setList={setList} />
		</div>
	);
};

export default Tasks;
