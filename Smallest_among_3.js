function smallest (a,b,c){
  if (a<b && a<c){
    console.log("Smallest number is ",a);
  }
  else if(b<a && b<c){
    console.log("smallest number is ",b);
  }
  else{
    console.log("smallest number is ",c)
  }
}

smallest(5,8,2);