import React from 'react';
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

	return <div>Testing2</div>;
};

export default Testing2;
