function convertTemp(celsius){
  console.log("temperature in celsius is ",celsius)
  const f = ((celsius)*9/5)+32;
  return f;
}
console.log("The temperature in fahrenheit is",convertTemp(36));