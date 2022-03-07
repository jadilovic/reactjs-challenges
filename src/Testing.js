import React, { useState, useEffect } from 'react';

const Testing = () => {
	const [solution, setSolution] = useState('');

	const sentence = 'Hello boys how are you?';

	const capitalize = () => {
		const wordArr = sentence.split(' ');
		const newWordArr = [];
		wordArr.forEach((word) => {
			newWordArr.push(word[0].toUpperCase() + word.slice(1));
		});
		setSolution(newWordArr.join(' '));
	};

	const maxCharacters = () => {
		const newStr = sentence.replace(/\W/g, '').toLowerCase();

		const objChar = {};
		let max = 0;
		let maxChar = '';

		for (const char of newStr) {
			if (objChar[char]) {
				objChar[char]++;
			} else {
				objChar[char] = 1;
			}
		}

		for (const key in objChar) {
			if (objChar[key] > max) {
				max = objChar[key];
				maxChar = key;
			}
		}
		console.log(objChar);
		console.log(maxChar);
	};

	const isBalanced = (strPar) => {
		const perArr = [];
		for (const per of strPar) {
			if (per === '(') {
				perArr.push(per);
			} else if (perArr.pop() !== '(') {
				return false;
			}
		}
		if (perArr.length !== 0) {
			return false;
		}
		return true;
	};

	const obj1 = { name: 'tom', age: 99 };
	const obj2 = { name: 'tom', age: 98 };

	const equalObject = () => {
		return JSON.stringify(obj1) === JSON.stringify(obj2);
	};

	useEffect(() => {
		capitalize();
		maxCharacters();
		isBalanced('(())');
	}, []);

	console.log(isBalanced('(())'));
	console.log(equalObject());
	console.log(obj1);

	return <div>{solution}</div>;
};

export default Testing;
