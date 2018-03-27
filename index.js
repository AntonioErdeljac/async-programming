function getStockSymbols(stocks) {
  let symbols = [];

  stocks.forEach((stock) => {
    symbols.push(stock.symbol);
  })

  // for(counter = 0; counter < stocks.length; counter++) {
  //   stock = stocks[counter];
  //   symbols.push(stock.symbol);
  // }

  return symbols;
}

let symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 120.22, volume: 432 },
  { symbol: "JXJ", price: 530.22, volume: 22 },
]);

console.log(JSON.stringify(symbols));