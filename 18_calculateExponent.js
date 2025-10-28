function exponent (base,power){
    let result =1;
    
    for (i=1;i<=power;i++){
        result = result *base;
    }
    return result;
}

console.log("Answer is :",exponent(2,3));
console.log("Answer is :",exponent(2,4));
console.log("Answer is :",exponent(5,6));