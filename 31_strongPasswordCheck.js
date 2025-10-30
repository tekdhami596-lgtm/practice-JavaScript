function isStrongPassword(passwordString){
  passwordString = passwordString.trim();

  if(passwordString.length<8){
    return false;
  }
  
  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTIVWXYZ"
  const numbers = "0123456789"
  const specialChar = "!@"

  let lowerCaseCharactersExists = false;
  let upperCaseCharactersExists = false;
  let numberExists = false;
   let specialCharExist = false;
  for(let char of passwordString){
    if(lowerCaseCharacters.includes(char)){
      lowerCaseCharactersExists = true;
    }
    else if(upperCaseCharacters.includes(char)){
      upperCaseCharactersExists=true;
    }
    else if(numbers.includes(char)){
      numberExists = true;
    }
    else if(specialChar.includes(char)){
      specialCharExist = true;
    }
  }

  if(lowerCaseCharactersExists && upperCaseCharactersExists && numberExists && specialChar){
    return true;
  }
  else{
    return false;
  }
  console.log("lowercaseCharactersExists", lowerCaseCharactersExists);
  console.log("upperCaseCharactersExists",upperCaseCharactersExists);
  console.log("numberExists ",numberExists);
  console.log("specialchars ",specialChars);
}

console.log("Ashish1! is ", isStrongPassword("Ashish1!"));
console.log("Ashish! is ", isStrongPassword("Ashish!"));
console.log("ashish1! is ", isStrongPassword("ashish1!"));
console.log("ASHISH1! is ", isStrongPassword("ASHISH1!"))