import React, { useEffect, useState } from 'react';

const Vowels = () => {
	const [count, setCount] = useState(0);
	const [newString, setNewString] = useState('');
	const [uniqueLetter, setUniqueLetter] = useState('');
	const sentence = 'aabbccaddeeii';
	const vowels = ['a', 'i', 'e', 'o', 'u'];
	const numbers = [11, 2, 3, 4, 5, 2, 16, 5, 6, 3, 2, 13];

	const getNumberOfVowels = () => {
		let num = 0;
		for (const letter of sentence) {
			if (vowels.includes(letter)) {
				num++;
			}
		}
		setCount(num);
	};

	const reverseString = () => {
		return sentence.split('').reverse().join('');
	};

	const removeDuplicate = () => {
		// let uniqueChars = [];
		// for (const char of sentence) {
		// 	if (!uniqueChars.includes(char)) {
		// 		uniqueChars.push(char);
		// 	}
		// }
		// return uniqueChars.join('');
		return [...new Set(sentence.split(''))].join('');
	};

	const findMaxAndMin = () => {
		// let max = numbers[0];
		// let min = numbers[0];
		// numbers.forEach((number) => {
		// 	if (number > max) {
		// 		max = number;
		// 	}
		// 	if (number < min) {
		// 		min = number;
		// 	}
		// });
		console.log('max : ', Math.max(...numbers), 'min : ', Math.min(...numbers));

		const sortedArr = numbers.sort((a, b) => a - b);
		console.log(
			'min : ',
			sortedArr[0],
			'max : ',
			sortedArr[sortedArr.length - 1]
		);
	};

	const isAnagram = () => {
		let str1 = 'Night';
		let str2 = 'Thing';
		str1 = str1.toLowerCase().split('').sort().join('');
		str2 = str2.toLowerCase().split('').sort().join('');
		console.log(str1 === str2);
	};

	useEffect(() => {
		getNumberOfVowels();
		setNewString(reverseString());
		setUniqueLetter(removeDuplicate());
		findMaxAndMin();
		isAnagram();
	}, []);

	return (
		<>
			<div>Vowels: {count}</div>
			<br />
			<div>Reverse string: {newString}</div>
			<br />
			<div>Unique letter: {uniqueLetter}</div>
		</>
	);
};

export default Vowels;
