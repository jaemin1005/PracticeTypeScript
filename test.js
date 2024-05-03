"use strict";
// type Currency = {
//   unit : "EUR" | "GBP" | "JPY" | "USD"
//   value : number
// }
// let Currency  = {
//   DEFAULT : "USD",
//   from(value:number, unit = Currency.DEFAULT): Currency{
//     return {unit, value};
//   }
// }
// let amountDue : Currency = {
//   unit: 'JPY',
//   value: 83733.10
// }
// let otherAmountDue = Currency.from(330, 'EUR');
function call(f, ...argrs) {
    return f(...argrs);
}
function fill(length, value) {
    return Array.from({ length }, () => value);
}
call(fill, 10, 'a');
function tuple(...ts) {
    return ts;
}
//# sourceMappingURL=test.js.map