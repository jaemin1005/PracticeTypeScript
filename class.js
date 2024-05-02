"use strict";
//#region --Mixin--
// * C는 최소한 클래스 생성자여야 한다. (즉 ClassConstructor에서 정의한 클래스 생성자 조건을 만족해야 한다.)
function withEZDebug(Class) {
    return class extends Class {
        debug() {
            let Name = this.constructor.name;
            let value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ')';
        }
    };
}
class HardToDebugUser {
    constructor(id, fristName, lastName) {
        this.id = id;
        this.fristName = fristName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return {
            id: this.id,
            name: this.fristName + ' ' + this.lastName
        };
    }
}
let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
console.log(user.debug());
//#endregion --Mixin--
//#region --final--
class MessageQueue {
    constructor(message) {
        this.message = message;
    }
}
class BadQueue extends MessageQueue {
    constructor(msg) {
        super(msg);
        this.msg = msg;
    }
}
//let msgQueue = new MessageQueue("Hi");
let badqueue = new BadQueue("Hello");
//# sourceMappingURL=class.js.map