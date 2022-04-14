import React, { useState } from 'react';
const Testing2 = () => {
	function x() {
		var b = 10;
		function y() {
			var c = 20;
			function q() {
				console.log(b, c);
			}
			return q;
		}
		return y;
	}
	// const z = x();
	// console.log(x());
	// console.log(z);
	// const r = z();
	// r();
	x()()();

	// function x() {
	// 	var a = 2;
	// 	setTimeout(function () {
	// 		console.log(a);
	// 	}, 2000);
	// }

	// x();

	// for (var index = 0; index <= 5; index++) {
	// 	function close(x) {
	// 		setTimeout(() => {
	// 			console.log(x);
	// 		}, x * 1000);
	// 	}
	// 	close(index);
	// }

	function outer() {
		var a = 10;
		function inner() {
			console.log(a);
		}
		return inner;
	}

	outer()();

	const counter = () => {
		let count = 0;
		const increase = () => {
			return ++count;
		};
		const decrease = () => {
			return --count;
		};
		return { increase, decrease };
	};
	const con = counter();

	console.log(con.decrease());
	console.log(con.increase());
	console.log(con.increase());

	const arr = ['a', 'b', 'c', 'd'];
	const nums = [1, 2, 3, 4, 5, 6, 7, 4, 3, 4, 3, 1];
	console.log(arr.splice());
	console.log(arr);

	console.log(arr.slice());
	console.log(arr);

	const addOne = (element) => {
		return element + 1;
	};

	const calculate = (arr, addOne) => {
		const newArr = arr.map((element) => {
			return addOne(element);
		});
		return newArr;
	};

	const binary = (x) => {
		return x.toString(2);
	};

	console.log(calculate(arr, addOne));
	console.log(arr.map(addOne));
	console.log(nums.map(binary));

	const sum = (num) => {
		return;
	};

	const total = nums.reduce((acc, current) => {
		return (acc += current);
	}, 0);

	console.log(total);

	for (var i = 0; i < 5; i++) {
		const time = (x) => {
			setTimeout(function log() {
				console.log(x);
			}, x * 1000);
		};
		time(i);
	}

	const red = nums.reduce((acc, curr) => {
		return (acc += curr);
	}, 0);

	const max = nums.reduce((acc, curr) => {
		if (acc < curr) {
			acc = curr;
		}
		return acc;
	}, 0);

	const users = [
		{ firstName: 'aki', lastName: 'adil', age: 3 },
		{ firstName: 'cuni', lastName: 'maki', age: 8 },
		{ firstName: 'boby', lastName: 'vaki', age: 1 },
		{ firstName: 'didy', lastName: 'roki', age: 1 },
		{ firstName: 'aki', lastName: 'adil', age: 3 },
		{ firstName: 'cuni', lastName: 'maki', age: 8 },
		{ firstName: 'boby', lastName: 'vaki', age: 5 },
		{ firstName: 'didy', lastName: 'roki', age: 1 },
	];

	const fullNames = users.map((user) => {
		return `${user.firstName} ${user.lastName}`;
	});

	const ageGroups = {};

	users.map((user) => {
		if (ageGroups.hasOwnProperty(user.age)) {
			ageGroups[user.age]++;
		} else {
			ageGroups[user.age] = 1;
		}
	});

	const newObject = users.reduce((acc, curr) => {
		if (acc.hasOwnProperty(curr.age)) {
			acc[curr.age]++;
		} else {
			acc[curr.age] = 1;
		}
		return acc;
	}, {});

	const peopleUnder30 = users
		.filter((user) => user.age < 4)
		.map((user) => user.firstName);

	const names = users.reduce((acc, curr) => {
		if (curr.age < 4) {
			acc.push(curr.firstName);
		}
		return acc;
	}, []);
	console.log(ageGroups);
	console.log(newObject);
	console.log(peopleUnder30);
	console.log(names);

	const obj = {
		name: 'Aki',
		display: function (action) {
			console.log(this.name + ' ' + action);
		},
	};

	const obj1 = {
		name: 'Cuni',
	};

	obj.display.call(obj1, 'traveling');
	obj.display.apply(obj1, ['traveling']);
	const newFun = obj.display.bind(obj1);
	newFun('flying');
	const add = (a) => {
		const other = (b) => {
			if (b) {
				return add(a + b);
			} else {
				return a;
			}
		};
		return other;
	};

	console.log(add(5)(2)(4)(8)());

	const calc = {
		total: 0,
		add(num) {
			this.total += num;
			return this;
		},
		multiply(num) {
			this.total *= num;
			return this;
		},
		subtract(num) {
			this.total -= num;
			return this;
		},
	};

	const result = calc.add(10).multiply(5).subtract(30).add(10);
	console.log(result.total);

	const adding = (a) => {
		const next = (b) => {
			if (b) {
				return adding(a + b);
			} else {
				return a;
			}
		};
		return next;
	};

	console.log(adding(2)(4)(6)());

	var myArray = [45, 10, 21, 54, 1, 55, 100];

	console.log(myArray.sort((a, b) => a - b));

	function checkNumber(num) {
		const check = ['even', 'odd'];
		console.log(num % 2);
		console.log(`${num} is ${check[num % 2]}`);
	}

	// for (let index = 1; index < 22; index++) {
	// 	checkNumber(index);
	// }

	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const charNum = {};
		const valueArr = value.split('');
		// valueArr.forEach((char) => {
		// 	if (charNum[char]) {
		// 		charNum[char]++;
		// 	} else {
		// 		charNum[char] = 1;
		// 	}
		// });
		const obj = valueArr.reduce((acc, curr) => {
			acc[curr] ? acc[curr]++ : (acc[curr] = 1);
			return acc;
		}, {});
		console.log(obj);
	};

	const numsArr = [9, 7, 1, 2, 3, 4, 4, 5, 6, 2, 3, 4, 7, 9, 4, 9];
	const unique = [];
	for (let index = 0; index < numsArr.length; index++) {
		if (unique.indexOf(numsArr[index]) === -1) {
			unique.push(numsArr[index]);
		}
	}

	const uniqueSet = [...new Set(numsArr)];

	console.log(unique);
	console.log(uniqueSet);
	console.log(Math.max(...numsArr));

	const maxi = numsArr.reduce((acc, curr) => {
		if (acc < curr) {
			acc = curr;
		}
		return acc;
	}, 0);

	console.log(maxi);

	const uniqueArr = [...new Set(numsArr)];
	const indexMax = uniqueArr.indexOf(maxi);
	uniqueArr.splice(indexMax, 1);
	const secondMax = Math.max(...uniqueArr);
	console.log(secondMax);

	const minNum = numsArr.reduce((acc, curr) => {
		if (acc > curr) {
			acc = curr;
		}
		return acc;
	}, numsArr[0]);

	console.log(minNum);

	console.log(numsArr.reverse());

	return (
		<>
			<div>Testing2</div>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Check Characters</button>
		</>
	);
};

export default Testing2;
