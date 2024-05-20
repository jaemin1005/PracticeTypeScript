//! ITEM 19 

const cache : {[ticker : string]: number} = {};
function getQuote(ticker: string){
  if(ticker in cache){
    return cache[ticker];
  }
  return fetch(`http://quotes.example.com/?q=${ticker}`)
    .then(response => response.json())
    .then(quote => {
      cache[ticker] = quote;
      return quote;
    });
}