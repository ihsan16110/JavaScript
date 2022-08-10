let first = 5
let second = 7

// console.log(first, second)
// this is a wrong approach
// first = second
// second = first

// --second approach
const temp = first
first = second
second = temp


// --aproach 2----- Destructuring

[first, second] = [second, first]
console.log(first, second)


// Home work Practice Problem

// write a function that will take 3 numbers / parameters will return thenmax number.
//Write a function that will take 3 parameters and will return  the min number


// first time do it using if else
// second time do it using Math.min or Math.max
