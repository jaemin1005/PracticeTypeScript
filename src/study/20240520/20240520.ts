const IsForObject = require('./Module/IsForObject');

type Operation = (x : number,y : number) => number;

let add : Operation = function(a, b) { 
  console.log(a+b);  
  return a+b 
};

const a = {};
const b = {};

function OperteObject(a : any, b: any) : number | null {
  
  if(IsForObject(a) && IsForObject(b)){
    return a.frist + b.frist;
  }

  return null;
}

let someData = add(1,2) + 100;
console.log(someData);