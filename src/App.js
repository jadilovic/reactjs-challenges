import './App.css';
import Board from './Board';
import FormRobot from './FormRobot';
import FormTest from './FormTest';
import Testing from './Testing';
import TicTac from './TicTac';
import Vowels from './Vowels';
import { useState } from 'react';
import Counter from './Counter';
import NumContext from './NumContext';
import Tasks from './Tasks';
import GetAPI from './GetAPI';
import GetData from './GetData';

function App() {
	const [count, setCount] = useState(0);

	const handleCounter = () => {
		setCount(count + 1);
	};
	return (
		<NumContext.Provider value={{ count, handleCounter }}>
			<div className="App">
				<p>Robots List</p>
				<FormRobot />
				<FormTest />
				<Vowels />
				{/* <Board /> */}
				{/* <TicTac /> */}
				<Testing />
				<Counter />
				<Tasks />
				{/* <GetAPI /> */}
				<GetData />
			</div>
		</NumContext.Provider>
	);
}

export default App;
