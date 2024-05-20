declare function cacheLast<T extends Function>(fn: T): T;
declare function shallowEqual(a: any, b: any): boolean;

function cacheLast<T extends Function>(fn: T): T {
  let lastArgs: any[]| null = null;
  let lastResult : any;

  return function(...args: any[]){
    if(!lastArgs || !shallowEqual(lastArgs, args)){
      lastResult = fn(...args);
      lastArgs = args;
    }

    return lastResult;
  };
}

//* 함수 내부에는 any가 꽤 많이 보이지만 타입 정의에는 any가 없기 때문에
//* cacheLast를 호출하는 쪽에서는 any가 사용됐는지 알지 못한다.
function cachLastL1<T extends Function>(fn: T): T {
  let lastArgs: any[]|null = null;
  let lastResult : any;

  return function(...args: any[]){
    if(!lastArgs || !shallowEqual(lastArgs, args)){
      lastResult = fn(...args);
      lastArgs = args;
    }

    return lastResult;
  } as unknown as T;
}

function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
  for (const [k, aVal] of Object.entries(a)){
    
    //! if(!(k in b) || aVal !== b[k])
    //* if 구문의 k in b 체크로 b 객체에 k 속성이 있다는 것을 확인했지만 b[k] 부분에서
    //* 오류가 발생한는 것은 이상ㅎ다. 실제 오류가 아니라는것이 알기 때문에 any로 단언하는 수 밖에 없다.
    if(!(k in b) || aVal !== (b as any)[k]){
      return false;
    }
  }

  return Object.keys(a).length === Object.keys(b).length;
}