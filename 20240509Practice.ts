const studentNamesArray = require('./names-data.js');
const menus = require("./LaunchMenus.js")

class TEST20240509{
 
  static Test(){
    

    studentNamesArray.forEach((name : string) => {
    console.log(name);
    });
  }

  static hello(a: any,b : any, callback : () => undefined){
    
    console.log(arguments[0]);
    console.log(arguments[1]);
  }

  Speak(){
    console.log("Hello");
  }  

  static lunchSelector(){
    
    let arr : [] = menus;
    let number = this.getRandomInt(0, arr.length);
    
    if(Array.isArray(arr[number]) === true){
      let newArr : [] = arr[number];
      let newNumber = this.getRandomInt(0, newArr.length);
      console.log(newArr[newNumber]);
    }

    else{
      console.log(arr[number]);
    }
    
  }

  static getRandomInt(min : number, max : number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

}


TEST20240509.lunchSelector();


// function b<T>(a : T, b :T,  callback : (a : T, b : T ) => T, callback2 : (a: T, b:T) => T ){
  
//   if(typeof a == "string") 
//     return callback2(a,b);
//   if(typeof a == "number")
//     return callback(a,b);
// }

// console.log(b("HI","HELLO",(a,b) =>  a*b,(a,b) => a+b));
