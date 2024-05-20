
//! ITEM 25 비동기 코드에는 콜백 대신 async 함수 사용하기

const _cache: {[url:string] : string} = {};

function fetchWithCache(url : string, callback: (text:string) => void){
  if(url in _cache){
    callback(_cache[url]);
  } else {
    fetchURL(url)
  }
}