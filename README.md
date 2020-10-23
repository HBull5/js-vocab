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

## strings

## number

## operators

## scope

## conditional stmts (build)

## functions

## loops (build)
