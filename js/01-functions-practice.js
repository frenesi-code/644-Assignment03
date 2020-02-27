//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), 
// divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5."

function halfNumber(number) {
    return `Half of the number ${number} is ${number/2}`;
} 

console.log(halfNumber(5));


//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number) {            
    return `The result of squaring the number ${number} is ${Math.pow(number, 2)}`;
}

console.log(squareNumber(3));

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number 
// represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

function percentOf(numberA, numberB) {
    return `${numberA} is ${(numberA/numberB) * 100}% of ${numberB} `
}

console.log(percentOf(2, 4));

//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement 
// that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

function findModulus(numberA, numberB) {
    return `${numberB % numberA} is the modulus of ${numberA} and ${numberB}.`
}

console.log(findModulus(4, 10));

//STEP 5
// Create a JavaScript function that accepts three numbers as parameters. Collect these numbers using a series of 
// prompts. Once the values are collected, within the function, find the sum of all of the numbers combined. 
// Make sure to use the arguments object and several type conversion functions to accomplish this task.

function SumNumbers() {
    var numberA = parseFloat(window.prompt("Type the Number A"));
    var numberB = parseFloat(window.prompt("Type the Number B"));
    var numberC = parseFloat(window.prompt("Type the Number C"));

    return `SUM = ` + (numberA + numberB + numberC);
}

console.log(SumNumbers());

