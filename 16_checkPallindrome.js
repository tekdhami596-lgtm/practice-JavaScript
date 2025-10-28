function pallindrome(inputString){
  if (typeof inputString !== "string"){
    throw new Error("Enter only string");
  }
  let storeString = inputString.toLocaleLowerCase();
  let result ="";
  for(let i=inputString.length-1;i>=0;i--){
    result+=inputString[i];
    }
    console.log(`original string : ${storeString}`);
    console.log(`reversed string : ${result}`);

    // compare both string
    if(result ===storeString){
      console.log("Pallindrome");
    }
    else{
      console.log("Not Pallindrome");
    }
}

pallindrome("madam");
pallindrome("Ram");