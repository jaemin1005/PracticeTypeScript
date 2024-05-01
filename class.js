//#region --Mixin--
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// * C는 최소한 클래스 생성자여야 한다. (즉 ClassConstructor에서 정의한 클래스 생성자 조건을 만족해야 한다.)
function withEZDebug(Class) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.debug = function () {
            var Name = this.constructor.name;
            var value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ')';
        };
        return class_1;
    }(Class));
}
var HardToDebugUser = /** @class */ (function () {
    function HardToDebugUser(id, fristName, lastName) {
        this.id = id;
        this.fristName = fristName;
        this.lastName = lastName;
    }
    HardToDebugUser.prototype.getDebugValue = function () {
        return {
            id: this.id,
            name: this.fristName + ' ' + this.lastName
        };
    };
    return HardToDebugUser;
}());
var User = withEZDebug(HardToDebugUser);
var user = new User(3, 'Emma', 'Gluzman');
console.log(user.debug());
//#endregion --Mixin--
//#region --final--
var MessageQueue = /** @class */ (function () {
    function MessageQueue(message) {
        this.message = message;
    }
    return MessageQueue;
}());
var BadQueue = /** @class */ (function (_super) {
    __extends(BadQueue, _super);
    function BadQueue(msg) {
        var _this = _super.call(this, msg) || this;
        _this.msg = msg;
        return _this;
    }
    return BadQueue;
}(MessageQueue));
//let msgQueue = new MessageQueue("Hi");
var badqueue = new BadQueue("Hello");
