// function calculateAverage(inputArray){
//   console.log (`Input array is ${inputArray}`);
//   let sum =0;
//   for (let arr of inputArray){
//     sum+=arr;
//   }
//   const average = sum/inputArray.length;
//   return average;
// }
// const av=calculateAverage([1,2,3,4,5,6,7,8,9]);
// console.log(`The average of the given array is ${av}`);

let a=5;
let b=6
let c=b;
b=a;
a=c
console.log("a:",a, "b:",b);