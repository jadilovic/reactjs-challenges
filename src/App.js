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
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Testing2 from './Testing2';
import Registration from './Registration';

function App() {
	const [count, setCount] = useState(0);

	const handleCounter = () => {
		setCount(count + 1);
	};
	return (
		<NumContext.Provider value={{ count, handleCounter }}>
			<Routes>
				{/* <div className="App">
					<p>Robots List</p> */}
				<Route path="/" element={<Home />} />
				<Route path="/robot1" element={<FormRobot />} />
				<Route path="/test2" element={<Testing2 />} />
				<Route path="/registration" element={<Registration />} />

				{/* <FormTest />
					<Vowels />
					<Board />
					<TicTac />
					<Testing />
					<Counter />
					<Tasks />
					<GetAPI />
					<GetData /> */}
				{/* </div> */}
			</Routes>
		</NumContext.Provider>
	);
}

export default App;
