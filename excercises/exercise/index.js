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
var modulo = 10 % 5;  // https://www.youtube.com/watch?v=MrTtsX2Wg9Q
nr2 += nr1;
nr1 *= nr2;
index++ // index is now 1
index-- // index is now 0

// Comparison

// Conditionals

// Functions

// Loops

// Arrays

// Objects
