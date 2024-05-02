
function isValid(date : Date) : boolean{
  return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
}

function parse(birthday: string): Date[]{
  let date = new Date(birthday);
  if(!isValid(date)){
    return [];
  }

  return[date];
}

function ask(){
  return prompt("When is your birthday");
}

interface Option<T>{
  flatMap<U>(f: (value : T ) => Option<U>) : Option<U>;
  getOrElse(value: T) : T;
}
class Some<T> implements Option<T>{
  constructor(private value: T){}
  
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value);
  }
  getOrElse() : T{
    return this.value;
  }
}

class None implements Option<never>{
  flatMap<U>() : Option<U>{
    return this
  }

  getOrElse<U>(value : U) : U{
    return value;
  }
}


// function ask(){
//   let result = prompt('When is your birthday');
//   if(result === null){
//     return [];
//   }
//   return [result];
// }

// ask().map(parse).map(date => date.toISOString());