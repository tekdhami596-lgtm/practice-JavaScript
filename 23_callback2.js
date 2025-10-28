function getData(dataID,getNextData){
  setTimeout(()=>{
    console.log("data:",dataID)
    if(getNextData){
      getNextData();
    }
  },3000)
}

getData(1,()=>{
  getData(2)
});
