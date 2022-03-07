import React from 'react';
import './Board.css';

const List = ({ list, setList }) => {
	const deleteItem = (i, item) => {
		//	list.splice(i, 1);
		const newList = list.filter((word) => word !== item);
		setList([...newList]);
	};

	console.log('list');
	return (
		<div>
			<ul>
				{list.map((item, index) => {
					return (
						<>
							<li
								className="square"
								onClick={() => deleteItem(index, item)}
								key={index}
							>
								{item}
							</li>
							<br />
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
