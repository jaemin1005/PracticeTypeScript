"use strict";
let Currency = {
    DEFAULT: "USD",
    from(value, unit = Currency.DEFAULT) {
        return { unit, value };
    }
};
let amountDue = {
    unit: 'JPY',
    value: 83733.10
};
let otherAmountDue = Currency.from(330, 'EUR');
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
let a = tuple(1, true);
