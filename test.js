// // // obj2.function1();
// // // obj2.function2();
// // // console.log(this);

// // const response = {
// // 	name: 'harcourt',
// // 	age: 26
// // };

// // // either one for accessing things
// // // obj2.property1;
// // // obj2['property1'];

// // obj2.property2 = 'value 2';
// // // console.log(obj2.property2);

// // // console.log(Object.entries(obj2));
// for (var i = 0; i < Object.entries(obj2).length; i++) {
// 	if (typeof Object.entries(obj2)[i][1] === 'function') {
// 		continue;
// 	} else {
// 		console.log(Object.entries(obj2)[i][1]);
// 	}
// }

// // console.log(typeof obj2.function1);

// const obj2 = {
// 	property1: 'value',
// 	property2: 'value 2',
// 	function1() {
// 		console.log(this.property1);
// 	},

// 	function2: function () {
// 		console.log(this);
// 	}
// };

// // console.log(obj2['property1']);

// obj2['proprety1'];

// for (const duck in obj2) {
// 	console.log(obj2[duck]);
// }

// const arr = [1, 2, 3];

// // for (var i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);
// // }

// for (const ele of arr) {
// 	console.log(ele);
// }

const obj = {
	isEvil: 10
};

console.log(obj.hasOwnProperty('hello'));

const date = new Date('2/11/1994');
console.log(date.getMonth());
