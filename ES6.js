//Create two arrays of numbers 

const numbers1 = [1, 2, 3, 4, 5 ];
const numbers2 = [6, 7, 8, 9, 10];

// spread operator to creat numbers array
const numbers = [...numbers1, ...numbers2];

// arrow function 
const square = (number) => number * number;

//map method to create new array of sqaures from numbers
const squares =numbers.map(square);

//arrow function to check if number is even 
const isEven = (number) => number % 2 ===0;

//use filter to create an array of even numbers
const evenSquares = squares.filter(isEven);

// use destructuring to extract 1st and 2nd elements 
const [firstEvenSqaure, secondEvenSquare] = evenSquares;

//log output using template literals
console.log(`Original Numbers Array: ${numbers}`);
console.log(`Squares Array:${squares}`);
console.log(`Even Squares Array: ${evenSquares}`);
console.log(`Extracted Even Squares: ${firstEvenSqaure} ${secondEvenSquare}`);
