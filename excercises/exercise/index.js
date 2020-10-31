// console.log('Working');

// * Adding JS to your HTML
// We will be doing this in the .html file itself.

// * Comments
// This line is commented out
/* Inside here everything gets commented out

Here aswell

*/

// * Devtools & logging
// extra features to check out: console.group(), console.error()
// console.log('String');
// console.log(10);
// alert('String');
// alert(15);
document.write('String');
document.write(10);

// Variables (If i type something in all caps, that means you can replace it with anything you want)
// extra features: const, let;
var NAME;
// console.log(NAME);
NAME = 'Value'; // assinging variable a value;
// name can have letters, numbers and _
// cant start with a number
// case sensitive
// some keywords are reserved (var, function)

// Variable types (simple, complex, special)  JS IS DYNAMICALLY TYPED
var string = 'string or any type of text'; // string
var number = 10;
var float = 10.55;
var boolean = true; // can be false as well;
// console.log(typeof float); // typeof gives you the type
var array = [1, 2, 3, 4];
var object = {
	name: 'Ole',
	age: 25,
	greet: function () {
		alert('greetings');
	},
};

var noValue = null;
var notANumber = NaN;
var undef = undefined; // var undef;
// String operations
var secondString = 'and this is a string aswell';
var thirdString = string + secondString;
// console.log(thirdString); // string or any type of textand this is a string aswell

// Math operations
var nr1 = 10;
var nr2 = 5;
var index = 0;
var sum = 10 + 5;
var minus = nr1 - nr2;
var multiply = nr1 * 5;
var divide = 10 / nr2;
var modulo = 10 % 5; // https://www.youtube.com/watch?v=MrTtsX2Wg9Q
nr2 += nr1;
nr1 *= nr2;
index++; // index is now 1
index--; // index is now 0

// Comparison
var a = 1;
var b = 2;
a < b; // a is smaller than b
a <= b; // a is smaller or equal to b
!(a < b); // a is not smaller than b
a != b; // a does not equal b
a == b; // a is equal to b (does not compare types) 2 == '2' true
a === b; // a is equal to b (does compare types)     2 === '2' false
!a; // a does not exist (a = null)
!!a; // a does exist

// Conditionals (Will be using the variablles from comparison a, b)
if (a < b) {
	// all of the comparison operators can be used here
	// console.log('a is smaller than b');
} else if (a === 0) {
	// console.log('a is equal to 0');
} else {
	// console.log('a is not smaller than b');
}

switch (a) {
	case a === 0:
		// console.log('a is equal to 0');
		break;

	case b === 0:
		// console.log('b is equal to 0');
		break;
	case a < b:
		// console.log('a is smaller than b');
		break;

	case a > b:
		// console.log('a is not smaller than b');
		break;

	default:
		// console.log('default action');
		break;
}

// Functions
// extra features: arrow function
/* 
var FUNCTION(argument1, argument2) => {
    var addedSum = argument1 + argument2;
    return addedSum
}
*/
function FUNCTION_NAME(argument1, argument2) {
	// console.log('The function has started');
	// console.log(argument1, argument2);
	var addedSum = argument1 + argument2;
	// console.log(addedSum);
	return addedSum;
	alert('THIS IS SOME TEXT');
}
function NOTIFY_SOMETHING(something) {
	alert(something);
	console.log(something);
	document.write(something);
}

var result;
// console.log(result);
var c = 10;
var d = 15;
result = FUNCTION_NAME(c, d);
// console.log(result);
// NOTIFY_SOMETHING('What we wanted to notify');

// Arrays
var arr = [];
arr = [1, 2, 3.55, 'text', [1, 2, 3], {name: 'Ole'}, true];
console.log(arr[0]); // 1
console.log(arr[3]); // 'text'
arr[1] = 10;
console.log(arr);
// Objects

// Loops
