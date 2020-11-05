# JS-Vocab

## variables

- variables: a container that holds data for our application we use the var key word

```js
var
```

- declaration: When you declare a variable but don't assign a value. Requires var keyword and a name

```js
var myVariable;
```

- assignment: When you assign a value to a variable

```js
myVaraible = 'data';
```

- assignment & declaration in one: When declare and assign a variable in the same stmt

```js
var myVariable = 'data';
```

- overwriting: when we reassign a value of a variable

```js
var myVariable = 'data';
myVariable = 'new data';
```

- Expressing variables as values: So when we **assign** a variable a value from another variable. ORDER of when things is _SUPER_ important

```js
var myVar1 = 'cool stuff';
var myVar2 = myVar1;
// myVar1 = 'cool stuff'
// myVar2 = 'cool stuff'
myVar1 = 'new stuff'; // myVar1 = 'new stuff';
// myVar2 still equals 'cool stuff'
```

## objects

- Object: An unordered container of key value pairs, so there is no first & no last item

- Object instantiation: **The act of creating a new object.** More specifically creating object form some template, better known as a class.

- Object properties: Are values that belong to the object, ideally they should describe the object. Object properties can be other objects or arrays or any available data type

```js
var harcourt = {
	age: 26,
	eyes: 'blue',
	hair: {
		color: 'blonde',
		length: 'way to damn long'
	},
	hobbies: ['computers', 'cars', 'tinkering']
};
```

- Object methods: Is a function that belongs to an object. There are 3 ways to define a method for an object, _changes the binding of "this"_

```js
var fast = {
	make: 'chevrolet',
	model: 'camaro',
	goFast: function () {
		console.log('go real fast!');
	},
	goFaster() {
		// <-- This is the one I recommend
		console.log('go real fast!');
	},
	goFastest: () => {
		console.log('go real fast');
	}
};
```

- Calling object methods: To call a method, we first need to specify which object the method belongs to b/c we can the same method name as long as they are in different objects

```js
// basic calling methods
fast.goFast();
fast.goFaster();
fast.goFastest();

var harcourt = {
	age: 26,
	gender: 'male',
	actions: {
		yell() {
			console.log('AHHHHHHHHHHHHHHHH!');
		},
		whisper() {
			console.log('shhhhh');
		}
	}
};

// more complicated method calling
harcourt.actions.yell();
```

- Changing through method calls: start w/ a string(could be any datatype) then call a method that turns it into an array(could be any datatype), then I call methods that belongs arrays(could be any datatype). **ALL THAT MATTERS IS WHAT DATATYPE IS RETURNED RIGHT BEFORE THE " . "**

```js
var str = 'hello, world'; // ['hello', 'world'].push('happy') === ['hello', 'world', 'happy']

str.str // what methods are available at this point? STRING METHODS
	.split(',') // what methods are available at this point? ARRAY METHODS
	//  str = 'hello, world' => str.split(',') => ['hello', 'world'] => ['hello', 'world'].push('happy') === ['hello', 'world', 'happy']

	.str.split(',')
	.push('happy');
```

- Object literal notation: Is the most means of instationiating an object.

```js
var slow = {
	make: 'ford',
	model: 'mustang',
	year: 1994
};
```

- appending to an object: we can use . syntax or we can [] syntax, _kinda like arrays, but not exactly_

```js
var obj = {}; // assigning the datatype of object to obj
var obj2;

obj.property1 = 'value'; // obj = { property1: 'value' }
obj['property2'] = 7; // obj = { property1: 'value', property2: 7 }
```

- assigning a value of a variable name to an object: you're going to want look at the demo

```js
var str = 'hello';
var obj = {};

obj.str = 'things'; // obj = { str: 'things' }; WRONG!
obj[str] = 'things'; // obj = { str: 'things', hello: 'things'}; YAY!
```

- Object create method: _not super important_

```js
var obj = Object.create({ a: 1, b: 2 }); // this is for savages
```

## arrays (build)

- Add in after class today

## strings

## number

## operators

## scope

## conditional stmts (build)

## functions

## loops (build)

## examples

```js
// const arr = [1, [true, false], 2, 3];

// console.log(arr[1]);

// for(var i = 0; i < arr[1].length; i++) {
//   // console.log(arr[1][i]);
// }

const arr = [
	'a',
	'b',
	[1, 2, { prop: 'value', key: 'value', arr: [true, { key: 'special' }] }],
	true,
	[10, 55]
];

console.log(arr[3]); // marquita
console.log(arr[4][0]); // audi
console.log(arr[2][2].key); // allin
console.log(arr[2][1]); // ezra
console.log(arr[2][2].arr[1].key); // kevin

/**
 *
 *
 * STRING STUFF
 *
 * */
var str1 = 'hello';
var str2 = 'world';
var num1 = 5;
var num2 = '-5';

var num3 = num1 + num2; // 55
var num4 = num1 + parseInt(num2);
num1 = num1 + 5;
num1 += 5;
console.log(num1);
// console.log(num4)

let arr = [1, 2, 3, 'hello'];
// arr[3] += ' world';
// arr += [3, 3];
// arr.push(3);
console.log(arr);

let obj = {
	key: 'value1',
	property: 'value2'
};

// obj += {key2: 'value2'};
obj.key2 = 'value 3';
var key3 = 'key3';
obj['key3'] = 'value 4';

console.log(obj);

// str3 hello world
var str3 = str1 + ' ' + str2;
document.write(str3);

var str4 = 'Hello ';
// str4 Hello world my name is Harcourt
str4 += 'world my name is Harcourt';
// str4 = 'Hello ' + 'world my name is harcourt';
console.log(str4);

var str1 = 'hello 5 world';
var str2 = 'oranges!, apples!, bananas, kiwi!';
console.log(str1.length);

document.write(str1.toUpperCase());
document.write(str1.toLowerCase());

document.write('<br>');

document.write(str1[2]);
document.write('<br>');
document.write(str1.indexOf('k'));

document.write('<br>');
document.write(str1.slice(0, 4));

console.log(str1.split(' '));
str2 = str2.split(','); // str2 = ['oranges', ' apples', ' bananas', ' kiwi'];

for (var i = 0; i < str2.length; i++) {
	str2[i] = str2[i].trim();
}

console.log(str2);

for (var i = 0; i < str2.length; i++) {
	// var doesInclude = ;
	// console.log(doesInclude);
	if (str2[i].includes('!')) {
		str2[i] = str2[i].replace('!', '');
	}
}

console.log(str2);
```

## let: kind of like var keyword can reassign things and modify values. Let & const can’t touch the global scope from function or block scope. Var can’t touch the global scope from function scope but can from block scope. let/const/arrow functions are not hoisted

```js
let string = 'hello';
string = true;
string = 5;
string++;
```

## const: short for constant, and cannot reassign values or modify values. However reference types (anything with the typeof object) can be modified. const for arrays and objects, const for iterators inside of loops, let for everything else

```js
const arr = [];
arr.push(0);
arr.push('hello world');
arr.push(true);
arr = 5; //<--- WRONG will cause error
arr = {}; //<--- WRONG cannot assign to another reference type either must remain the first defined type.

const const1; // never declare without assigning
```

## template literals: a better way to strings, interprets whitespace, you can have multiple lines for nicer formatting of HTML, and with \${} we can evaluate expressions.

```js
const harcourt = {
	name: 'harcourt',
	age: 26
};

const jessica = {
	name: 'jessica',
	age: 24
};

function greet(person) {
	div.innerHTML = `Hello my name is ${person.name},
and I am ${person.age} years old.`;
	// console.log('Hello my name is ' + person.name + ' and I am ' + person.age + ' years old.');
}

greet(harcourt);
greet(jessica);
```

## arrow functions: They're just like regular functions, however _this_ is bound differently, if you have parameter you can drop the parenthesis, if you have none you must include empty parenthesis, if you have multiple you must have them just like in a regular function, if you omit the curly brackets whatever is specified will be returned. They are anonymous by nature so unless you assign them to a variable they will be anonymous.

```js
() => {
	function foo() {
		console.log('foo function');
	}

	const foo = function (param, param2) {
		console.log(`foo function ${param}`);
	};

	const arrow = (param, param2) => {
		console.log(`arrow function ${param}`);
	};

	foo('hello');
	arrow('hello');

	const arrow = (param) => param + 2; // being returned
	console.log(arrow(2));
};
```

## rest: Allows you to accept multiple parameters into your function definition, must be the last parameter passed into the function. It is denoted by the ellipsis '...' and then name of your rest operator.

```js
function rest(str, ...params) {
	console.log(params);
	let total = 0;
	for (const param of params) {
		total += param;
	}
	console.log(`${str}: ${total}`);
}

rest(1, 2, 3);
rest(1);
rest('a', 'b', true, 99);
rest([1, 2, 33], 'a');
rest('Your total is', 1, 2, 33);
```

## spread: Also denoted with the '...' however it is passed in as the argument in the function expression (when you the call the function). I've only used it to prevent malformed results.

```js
function spread(x, y, z) {
	console.log(x + y + z);
}

const args = [2, 2, 2, 2, 2];

spread(args); // returns a bunch of nasty undefined's we can spread to get rid of that.
spread(...args);
```

## object destructuring: can be used to create variables out of objects, and then more importantly we can specify which properties/methods you want to use in your function and then when calling the function you can just pass in a single object.

```js
const harcourt = {
	name: 'Harcourt',
	age: 26,
	yell() {
		console.error('YELL');
	}
};

const jessica = {
	name: 'Jessica',
	age: 24
};

function greet({ name, age, yell }) {
	console.log(`Hello my name is ${name}, and I am ${age} years old.`);
	if (yell !== undefined) {
		yell();
	}
}

greet(harcourt);
greet(jessica);

let { name, age } = harcourt;
console.log(name, age);
```

## ternary operators: Basically they're just inline if/else statements. Your conditional statement can go inside of parenthesis or not then must be followed by a "?" after that you have a ":" the true leg is on the left side of the colon and the false leg is on the right side of the colon.

```js
if (true) {
	console.log('true');
} else {
	console.log('false');
}

2 == '2' ? console.log('true') : console.log('false');

true
	? false
		? console.log('nested true')
		: console.log('nested false')
	: true
	? console.log('else true')
	: console.log('else false');
```

## for...of: iterates over every element of an array, typically will assign the iteration as a constant, and I try to use singular plural syntax. i.e. for(const name of names) { //code }

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const names = ['john', 'jane', 'jack', 'jill'];
const config = [true, 'hello world', 8, false];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (const ele of arr) {
	console.log(ele);
}

for (const name of names) {
	console.log(name);
}

for (const setting of config) {
	if (typeof setting === 'boolean') {
		console.log(setting);
	}
}
```

## for...in: iterates over every key of an object, I typically will always make the iterator named key, maybe useful inside of the code block to store values in a variable called value.

```js
// for...in
const car = {
	make: 'ford',
	model: 'mustang',
	color: 'blue',
	engine: 5.0,
	options: {
		cobra: true,
		leather: true,
		soundSys: false
	}
};

for (let i = 0; i < Object.keys(car).length; i++) {
	console.log(car[Object.keys(car)[i]]);
}

for (const key in car) {
	let value = car[key];
	if (typeof value === 'object') {
		console.log(value);
	}
}
```

## this: the value of this is the the object that is executing the current function/method. I have some other considerations listed below

- In general it is whatever to the left of the period is the calling object, if that method then calls another that doesn't have any "."'s then it is called by the global object.
- this is only bound on functions and methods not properties, _excluding the use of the new keyword_
- arrow functions do NOT bind their own "this" an easy way to think of it is what is the value of "this" outside of the arrow function? b/c that is whatever the value of this is inside the arrow function
- The new keyword ensures that "this" always points to the object in which you created with the "new" keyword

```js
'check out the this.js file in this repo for examples. Also checkout this link --> https://codepen.io/hbull5/pen/bGeqdbq has pretty much the same thing but in a code pen';

```

## call: Will execute or call function with a specified "this" value, all parameters passed afterward are accepted as parameters passed into the function being called.

```js
const harcourt = {
	name: 'Harcourt',
	age: 26,
	greet() {
		console.log(`Hello my name is ${this.name}`);
	},
	greetNewPerson(personName, punctuation) {
		console.log(`Hello ${personName}, I am ${this.name}${punctuation}`);
	}
};

const jessica = {
	name: 'Jessica',
	age: 24,
	greet() {
		console.log(
			`Hello my name is ${this.name}, and I am ${this.age} years old.`
		);
	}
};

// call
jessica.greet.call(harcourt);
harcourt.greetNewPerson.call(jessica, 'Steve', '!');
```

## apply: works just like call, except the parameters are passed in as an array instead of a comma seperated list

```js
const harcourt = {
	name: 'Harcourt',
	age: 26,
	greet() {
		console.log(`Hello my name is ${this.name}`);
	},
	greetNewPerson(personName, punctuation) {
		console.log(`Hello ${personName}, I am ${this.name}${punctuation}`);
	}
};

const jessica = {
	name: 'Jessica',
	age: 24,
	greet() {
		console.log(
			`Hello my name is ${this.name}, and I am ${this.age} years old.`
		);
	}
};

// apply
jessica.greet.apply(harcourt);
harcourt.greetNewPerson.apply(jessica, ['Steve', '!']);
```

## bind: Creates a new function definition that has a specified this value, anytime the function is called the "this" has already been defined to whatever it was bound to.

```js
const harcourt = {
	name: 'Harcourt',
	age: 26,
	greet() {
		console.log(`Hello my name is ${this.name}`);
	},
	greetNewPerson(personName, punctuation) {
		console.log(`Hello ${personName}, I am ${this.name}${punctuation}`);
	}
};

const jessica = {
	name: 'Jessica',
	age: 24,
	greet() {
		console.log(
			`Hello my name is ${this.name}, and I am ${this.age} years old.`
		);
	}
};

const harcourtGreet = jessica.greet.bind(harcourt);
harcourtGreet();
```

## OOP: Object Oriented Programming, oop is a paradigm that is based around creating blue prints or "classes" to instantiate objects from those blue prints.

## Classes: Classes are our blueprints for building objects. They are denoted with the class keyword followed by the name of the class. The naming convention is to use a capital letter first.

```js
class House {
	// properties & methods of houses
}

class Car {
	// properties & methods of cars
}

class Person {
	// properties & methods of people
}
```

## Constructors: Constructor are used to actually "construct" our objects. They take in parameters to build the object out of. The syntax is always going this.parameter = parameter;

```js
class House {
	constructor(sqft, beds, baths, doors, windows) {
		this.sqft = sqft;
		this.beds = beds;
		this.baths = baths;
		this.doors = doors;
		this.windows = windows;
	}
}
```

## Instantiation: Is building the object form the blueprint. This is when we actually call the constructor function to create an object. They way instantiate a new object is with the "new" keyword and then the name of the class, with all of the parameters passed into the constructor.

```js
class House {
	constructor(sqft, beds, baths, doors, windows) {
		this.sqft = sqft;
		this.beds = beds;
		this.baths = baths;
		this.doors = doors;
		this.windows = windows;
	}
}

const myHouse = new House(1600, 4, 2, 3, 7); // this is where the instantiation takes place.
```

## Class Methods: Are methods that belong to the object created from the class. In other words they can be called on an object instantiated from that class.

```js
class House {
	constructor(sqft, beds, baths, doors, windows) {
		this.sqft = sqft;
		this.beds = beds;
		this.baths = baths;
		this.doors = doors;
		this.windows = windows;
	}

	getBedrooms() {
		return this.beds;
	}

	setBedrooms(beds) {
		this.beds = beds;
	}
}

const myHouse = new House(1600, 4, 2, 3, 7);
myHouse.getBedrooms(); // returns 4
myHouse.setBedrooms(5); // updates myHouse.beds to 5 from 4
myHouse.getBedrooms(); // returns 5
```

## Static methods: are methods that belong to the class itself, and DO NOT require instantiation. When we call them we call them directly off the class.

```js
class Math {
	// we don't have constructor b/c this "helper" class is all static methods, so we not going to instantiate any objects form this class.

	static add(x, y) {
		return x + y;
	}

	static sub(x, y) {
		return x - y;
	}

	static mul(x, y) {
		return x * y;
	}

	static div(x, y) {
		return x / y;
	}
}

// never needed to instantiate an object to use these methods
Math.add(2, 2); // return 4
Math.mul(2, 6); // return 12
```

## Inheritance: defines a class and sub-class relationship, i.e. Car (main class) Mustang (sub-class) "A mustang is always a car, but a car is not always a mustang" we define this relationship with the 'extends' keyword. We use the super keyword to refer to the parent class in the hierarchy.

- _"It means that you create a (child) class by deriving from another (parent) class. This way, we form a hierarchy." --Kevin_
- _"The child class reuses all fields and methods of the parent class (common part) and can implement its own (unique part)." --Kevin_

```js
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	poop() {
		return 'poop';
	}
}

class Donkey extends Animal {
	constructor(name, age, diet, sound) {
		super(name, age);
		this.diet = diet;
		this.sound = sound;
	}

	heehaw() {
		return this.sound;
	}
}

class Cat extends Animal {
	constructor(name, age, diet, sound) {
		super(name, age);
		this.diet = diet;
		this.sound = sound;
	}

	meow() {
		return this.sound;
	}
}

const figaro = new Cat('Figaro', 4, 'catfood', 'meow');
figaro.meow(); // return meow
figaro.poop(); // return poop
```

## Find more OOP examples in oop.js

## Functions: Functions are mostly useful to store code and keep our code DRY(don't repeat yourself), can be useful for timing of things (typically anonymous functions), lastly can be useful when you don't know your inputs. There are two parts to executing a function, the function definition is when we define instructions to execute upon expression or calling of the function. We need to give it a name, define any inputs we need, these inputs are called parameters. Function expression is the act of executing those instructions, here we must pass any parameters that are defined in our function definition. EXAMPLE: the function definition is the blender, the ingredients are the parameters and the act of blending is the function call. We can the use RETURN keyword to define our output. The return value is what the function expression evaluates too. Return stops execution of the function where it is located. An anonymous function is a function w/ out a name, these are typically used fo callback functions.

```js
// function definition
function foo() {
	console.log('foo');
}

// function expression (calling the function)
foo();

// anonymous function
setTimeout(function () {
	console.log('hello after 3');
}, 3000);

// function w/ parameters
function add(num1, num2) {
	console.log(num1 + num2);
}
add(2, 2); // write 4 to the console
add(5, 10); // writes 15 to the console

// return keyword
function bar(bool) {
	if (bool) {
		return 'True';
	} else {
		return 'False';
		return 'Willy Wonka'; // this will never get executed b/c it stops at the first return it hits
		console.log('hello world'); // this also will never happen
	}
}
const millionaire = bar(true); // millionaire === 'True'
const billionaire = bar(false); // billionaire === 'False'
```

## Loop: A means of executing a code block repetitively until some condition becomes false "breaking" us out of the loop. Each cycle of the loop, or one pass, is called iteration. Some important keywords for any loop are break & continue. Break will break you out of the loop kind of like return in functions except nothing is passed out of the loop, just breaks out of the loop. Continue stops execution at the continue keyword and moves onto the next iteration. Infinite loop can be problematic as they go on forever

## While: while loops take a condition and continue to execute the code block until the condition becomes false. While loops are the most dangerous b/c they have no means of built in breaking out of the loop.

```js
// infinite loop
while (true) {
	console.log('on fire');
}

// for loop like while loop
let counter = 0;
while (counter < 5) {
	console.log(counter);
	counter++;
}

// continue
let counter = 0;
while (counter < 5) {
	if (counter === 3) {
		console.log('Three');
		counter++;
		continue; // moves onto next iteration here, doesn't execute the next 3 lines
	}

	console.log(counter);
	counter++;
}
// console -> 0 1 2 Three 4

// break
while (true) {
	break; // breaks out of the loop
	console.log('hello');
}
// console -> (empty)
```

## For: For is mostly used for iterating over arrays, can also used to iterate over objects though that is more complicated. For takes 3 parameters, declaration (typically you'll use i, where i stands for iteration, the declaration only happens once on the very first iteration), conditional statement (this determines whether or not to continue executing the loop, this evaluated first at the beginning of each iteration, except for the very first where the declaration happens), the last parameter is an incrementor or decrementor (this is the last thing to run in our loop, happens after the last statement is executed in the code block)

```js
for (var i = 0; i < 10; i++) {
	console.log(i);
}
// 0 - 9

for (var i = 10; i > 0; i--) {
	console.log(i);
}
// 10 - 1

const arr = ['a', 'b', 'c'];

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
// a b c
```

## If / Else if / Else: In a given if block, only one code block can execute. You must always start w/ an if stmt, if you want additional checks, you can do this with else if()'s you can have as many of these as you'd like. You can only have one else. The one code block executed will always be the one that's condition evaluates true first, subsequent true conditions don't matter. Only if the if and all of the else if's evaluate to false does the else block run. Conditional statement must always evaluate to true or false.

```js
// add examples in from before class
```

## Try / Catch / Finally: Try tries to execute a block of code, upon error it stops execution of that code block and passed the error into the catch block. You cannot have a try without a catch or a catch without a try. The catch block takes one parameter of the error throw from the try block. Finally always executes a block of code regardless of whether or not there was an error.

```js
try {
	const var1 = 'hello';
	console.log(var1); // writes hello
	console.log(var2); // throw error to catch block
	console.log(var3); // will also cause error, but is unreachable b/c an error happened before it
} catch (err) {
	console.error(err.stack); // other useful property is err.message
} finally {
	console.log('this block of code is always executed, no matter what');
}
```

## Throw: throw error that MUST be caught or the application will stop executing. Most commonly you can throw an error from inside of a function, and yes you do not have to throw an error from a try/catch block it can be thrown anywhere.

## Callbacks: are a function definition that is passed as a parameter into a function, the expectation is to later call that function based on what you defined the parameter as, cb is the most common convention.

```js
function add(num1, num2, cb) {
	const sum = num1 + num2;
	cb(sum);
}

function addOne(num) {
	console.log(num + 1);
}

add(2, 2, (data) => {
	console.log(data);
});

add(2, 2, addOne);
```

## Promise: Are a better way to handle callbacks. If we want the async behavior from a function call (most common) we can do this by return new Promise((resolve, reject) => { // promise body }). Inside of our promise body if we call resolve() we call our .then(cb) callback, if we reject we call the .catch(cb) callback. We can ONLY have one happen, i.e. we cannot have a promise both resolve and reject. Anything we pass into our resolve() or reject() will be available in the callback function of the .then() or .catch() respectively.

```js
function myPromise() {
	return new Promise((resolve, reject) => {
		resolve('Help you understand promises!');
	});
}

myPromise().then((promise) => {
	console.log(promise);
});

function myPromise2(errBool) {
	return new Promise((resolve, reject) => {
		if (errBool) {
			reject('ERROR! Promise broken.');
		} else {
			resolve('Promise kept');
		}
	});
}

myPromise2(false)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
```

## Promise.all():
