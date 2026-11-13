"use strict";

const ps =require("prompt-sync");
const prompt = ps({sigint: true});

const arr=[];

let numberOfElements = Number(prompt("Enter the number of elements in the array: "));

for (let i = 0; i < numberOfElements; i++)
     { 
        arr[i] = Number(prompt ("Enter element " + (i + 1) + ": "));
     }

     let arr2 = [];

     arr2[0] = arr[0];

     for (let i=1; i < numberOfElements; i++)
     {
      arr2[i] = arr2[i-1] + arr[i];
     }
     
     console.log("The running sum of the array is: ", arr2);
   

