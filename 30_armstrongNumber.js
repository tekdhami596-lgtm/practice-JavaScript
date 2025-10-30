function isArmstrong(num){
  let str = num.toString();
  let digits = str.length;
  let sum =0;
  for(let ch of str){
    sum = sum + Math.pow(Number(ch),digits);
  }
  if (sum === num){
    console.log(`${num} is armstrong number.`)
  }
  else{
    console.log(`${num} is not armstrong number.`)
  }
}

isArmstrong(153);
isArmstrong(122);