import React, { useState, useReducer } from 'react';

const Registration = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		1: '',
	});

	const handleChange = (e) => {
		e.preventDefault();
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.password !== user.confirmPassword) {
			console.log('Not same password');
		} else {
			console.log(user);
		}
		setUser({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			1: '',
		});
	};
	const initialValue = 0;
	const reducer = (state, action) => {
		switch (action) {
			case 'increase':
				return state + 1;
			case 'decrease':
				return state - 1;
			case 'reset':
				return 0;
			default:
				return state;
		}
	};
	const [count, dispatch] = useReducer(reducer, initialValue);

	let name = {
		firstName: 'aki',
		lastName: 'adilovic',
	};

	let name1 = {
		firstName: 'cuni',
		lastName: 'adilovic',
	};

	const printName = function () {
		console.log(this.firstName + ', ' + this.lastName);
	};

	const printMyName = printName.bind(name);
	printMyName();

	let greeting = {
		message: 'Good morning!',
		name: 'Sourabh',
		displayMessage() {
			console.log(`Hello ${this.name}, ${this.message}`);
		},
	};
	setTimeout(function () {
		greeting.displayMessage();
	}, 1000);

	let morning = {
		message: 'good day',
		name: 'aki',
	};

	const myGreeting = greeting.displayMessage.bind(morning);
	setTimeout(myGreeting, 2000);

	return (
		<>
			<div>Registration</div>
			<button onClick={() => dispatch('increase')}>Increase</button>
			<h3>{count}</h3>
			<button onClick={() => dispatch('decrease')}>Decrease</button>
			<br />
			<button onClick={() => dispatch('reset')}>Reset</button>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="firstName"
					value={user.firstName}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="lastName"
					value={user.lastName}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					value={user.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					value={user.password}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="confirmPassword"
					value={user.confirmPassword}
					onChange={handleChange}
				/>
				<input type="text" name={1} value={user[1]} onChange={handleChange} />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Registration;
