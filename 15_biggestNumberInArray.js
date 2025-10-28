function biggestNumber(arrayOfNumber){
  console.log(arrayOfNumber)

  let biggest = arrayOfNumber[0];
  for (let i=1;i<=arrayOfNumber.length;i++){
    if(arrayOfNumber[i]>biggest){
      biggest=arrayOfNumber[i];
        }
  }
return biggest;
}


console.log(`Biggest Number in given array is ${biggestNumber([3,4,5,8,9,1])}`);