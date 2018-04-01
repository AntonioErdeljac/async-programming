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



let stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 120.22, volume: 432 },
  { symbol: "JXJ", price: 530.22, volume: 22 },
];

const filteredStockSymbols =
  stocks.
    filter((stock) => {
      return stock.price >= 150;
    }).
    map((stock) => {
      return stock.symbol;
    });

// filteredStockSymbols.forEach((stockSymbol) => {
//   console.log(stockSymbol);
// })

let exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 120.22, volume: 432 },
    { symbol: "JXJ", price: 530.22, volume: 22 },
  ],
  [
    { symbol: "PTPT", price: 213.62, volume: 432 },
    { symbol: "NLL", price: 460.42, volume: 4132 },
    { symbol: "IVV", price: 340.7, volume: 32 },
  ],
];

Array.prototype.concatAll = function() {
  let results = [];

  this.forEach((function(subArray) {
    subArray.forEach((function(item) {
      results.push(item);
    }))
  }));

  return results;
}

exchanges.concatAll().forEach((stock) => {
  console.log(stock);
})

// exchanges.forEach((exchange) => {
//   exchange.forEach((stock) => {
//     console.log(JSON.stringify(stock));
//   });
// });


// console.log(expensiveStocks);
