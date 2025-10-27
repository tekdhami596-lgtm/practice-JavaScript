// Program that greets a person based on their gender.

function greet(gender){

if(gender.toLocaleLowerCase() === "male"){
  console.log("Hello sir !")
}
else if (gender.toLocaleLowerCase() ==="female"){
  console.log("Hello Mam !");
}
else{
  console.log("Hello there");
}
}

greet("FEMALE")