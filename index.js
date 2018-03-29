function getStockSymbols(stocks) {
  // let symbols = [];

  // stocks.forEach((stock) => {
  //   symbols.push(stock.symbol);
  // })

  // for(counter = 0; counter < stocks.length; counter++) {
  //   stock = stocks[counter];
  //   symbols.push(stock.symbol);
  // }

  return stocks.map((stock) => {
    return stock.symbol;
  })

  return symbols;
}

// Array.prototype.map = function(projection) {
//   let results = [];

//   this.forEach(function(item) {
//     results.push(projection(item));
//   });

//   return results;
// }

function getStocksOver(stocks, minPrice) {
  // let results = [];

  // stocks.forEach(stock => {
  //   if(stock.price >= minPrice) {
  //     results.push(stock);
  //   }
  // });

  return stocks.filter(function(stock) {
    return stock.price >= minPrice;
  });
}

// Array.prototype.filter = function(predicate) {
//   let results = [];

//   this.forEach(function(item) {
//     if(predicate(item)) {
//       results.push(item);
//     }
//   });

//   return results;
// };

let expensiveStocks = getStocksOver([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 120.22, volume: 432 },
  { symbol: "JXJ", price: 530.22, volume: 22 },
], 150);


console.log(expensiveStocks);
