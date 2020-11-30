const prompt = require('prompt-sync')();
let numOne = prompt('Enter first number: ');
let numTwo = prompt('Enter second number: ');
let numThree = prompt('Enter third number: ');
let firstcomputation = numOne + numTwo * numThree;
let secondcomputation = numOne % numTwo + numThree;
let thirdcomputation = numThree + numOne / numTwo;
let fourthcomputation = numOne * numTwo + numThree;

console.log("Maximum Number is: "+ Math.max(firstcomputation,secondcomputation,thirdcomputation,firstcomputation))
console.log("Minimum Number is: "+ Math.min(firstcomputation,secondcomputation,thirdcomputation,firstcomputation))