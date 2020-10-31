// #1 Using loops (for or while), write a function, printing numbers from a to b, divisible by c.
// Write a function, that loops over the given range through function arguments
// Print out the numbers that are divisible by the last function argument.

// numbersinLoops(10,20,3)
// 10 starting
// 20 ending
// 3 divisible by
/*
12, 15, 18
*/

function numbersInLoop(rangeStart, rangeEnd, divisor) {
	for (index = rangeStart; index <= rangeEnd; index += 1) {
		if (index % divisor === 0) {
			console.log(index);
		}
	}
}
numbersInLoop(10, 20, 3);
console.log(function_test);
