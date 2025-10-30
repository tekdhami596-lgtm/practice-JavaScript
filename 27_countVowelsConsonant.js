function countVowelsAndConst(str){
  str =str.toLowerCase();
  let vowels = 0;
  let consonant = 0;

  for(let ch of str){
    if("aeiou".includes(ch)){
      vowels++
    }
    else if(ch>='a' && ch<='z'){
      consonant++;
    }
  }
console.log("Vowels :",vowels);
console.log("Consonant :",consonant);
}

countVowelsAndConst("Education");