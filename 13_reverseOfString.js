function reverse (inputString){
  if (typeof inputString !== "string"){
    throw new Error("Please enter only string");
  }

  let w =" ";
  for(let i=inputString.length-1;i>=0;i--){
    w+= inputString[i];
  }
  return w;
}

const result = reverse("TekDhami");
console.log(result);