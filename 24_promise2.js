// let promise = new Promise((resolve,reject)=>{
//   console.log('I am promise.');
//   resolve('Success');
//   reject('failed');
// });

// function getData(dataId, getNextData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       // console.log('data :',dataId);
//       // resolve ('Success');
//       reject("Failed");
//       if(getNextData){
//         getNextData();
//       }
//     }, 2000);
//   });
// }

// let p = new Promise ((resolve,reject)=>{
//   console.log("I am a promise.")
//   // resolve("Success");
//   reject("Failed");
// });

// p.then((res)=>{
//   console.log("Promise is fulfilled.");
// });
// p.catch((err)=>{
//   console.log("Promise is failed."+err);
// });


// function asyncFunc1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data2");
//       resolve("Good");
//     }, 4000);
//   });
// }
// console.log("fetching data1....")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//   console.log(res)
//   console.log("fetching data2....")
// let p2 = asyncFunc2();
// p2.then((message)=>{
//   console.log(message)
// })
// });

function getData (dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",dataId);
      resolve("success");
      
    },2000);
  })
}
// promise chain
console.log("getting data1 ......")
getData(1)
.then((res)=>{
  console.log("getting data2 ......")
  return getData(2)
})
.then((res)=>{
  console.log("getting data3......")
  return getData(3)
})
.then((res)=>{
  console.log(res)
})


