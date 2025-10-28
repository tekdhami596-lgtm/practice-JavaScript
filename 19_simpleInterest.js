function CalculateSimpleInterest(p,t,r){
  let SI = (p*t*r)/100;
  return SI;
}

console.log("Simple Interest is : "+ CalculateSimpleInterest(2000,6,10));