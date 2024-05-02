"use strict";
function isValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
}
function parse(birthday) {
    let date = new Date(birthday);
    if (!isValid(date)) {
        return [];
    }
    return [date];
}
function ask() {
    return prompt("When is your birthday");
}
class Some {
    constructor(value) {
        this.value = value;
    }
    flatMap(f) {
        return f(this.value);
    }
    getOrElse() {
        return this.value;
    }
}
class None {
    flatMap() {
        return this;
    }
    getOrElse(value) {
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
//# sourceMappingURL=Error.js.map