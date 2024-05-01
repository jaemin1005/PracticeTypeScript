var Currency = {
    DEFAULT: "USD",
    from: function (value, unit) {
        if (unit === void 0) { unit = Currency.DEFAULT; }
        return { unit: unit, value: value };
    }
};
var amountDue = {
    unit: 'JPY',
    value: 83733.10
};
var otherAmountDue = Currency.from(330, 'EUR');
function call(f) {
    var argrs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argrs[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, argrs);
}
function fill(length, value) {
    return Array.from({ length: length }, function () { return value; });
}
call(fill, 10, 'a');
function tuple() {
    var ts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ts[_i] = arguments[_i];
    }
    return ts;
}
var a = tuple(1, true);
