function printMultiplicationTable (tableOf,tableTill){
  console.log(`table of : ${tableOf}, table till : ${tableTill}`);

  for (let i=1;i<=tableTill;i++){
    console.log(`${tableOf}*${i}=${tableOf*i}`);
  }
}

printMultiplicationTable(4,20)