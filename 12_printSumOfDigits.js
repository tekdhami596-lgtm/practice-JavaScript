let sum = 0;

function sumOfDigits (n){
  if (n<1){
    throw new Error("Input number must be positive")
  }
  const nString = n.toString();
  const nSplitted = nString.split('');
  console.log(nSplitted);
  nSplitted.forEach(num => sum += parseInt(num));
  return sum;
}
let value = sumOfDigits(567);
console.log(value);