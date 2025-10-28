function getData(dataID,getNextData){
  setTimeout(()=>{
    console.log("data:",dataID)
    if(getNextData){
      getNextData();
    }
  },2000)
}

getData(1,()=>{
  console.log("Getting data 2 .....")
  getData(2, ()=>{
    console.log("Getting data 3 .....")
    getData(3,()=>{
      console.log("Getting data 4 .....")
      getData(4);
    })
  })
});
