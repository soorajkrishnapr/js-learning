"use strict";

const ps = require("prompt-sync");
const prompt = ps({sigint: true});

function sumOfTwoIntegers(num1, num2)
{
    return num1 + num2;
}

let num1 = Number(prompt("Enter the first number: "));
let num2 = Number (prompt("Enter the second number: "));

const result = sumOfTwoIntegers(num1, num2);
console.log('The sum of', num1, 'and', num2, 'is', result);
