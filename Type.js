"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Type {
    constructor() {
        this.a = 'A';
        //c : AB = 'C';
        this.ab = Math.random() < 0.5 ? 'A' : 'B';
        this.ab12 = this.ab;
    }
    Test() {
        let b = {
            name: "hi",
            birth: new Date(),
        };
        //문제는 바로 상태 값의 두 가지 속성이 동시에 정보가 부족하거나 두가지 속성이 충돌할 수 있다는 것입니다.
        //let c : UnionType = {} 
        let c = {
            name: "HI"
        };
    }
}
class Cylinder {
    constructor() {
        this.radius = 1;
        this.height = 1;
    }
    calculateVloume(shape) {
        if (shape instanceof Cylinder) {
            shape.radius = 1;
        }
    }
    test() {
        const v = typeof Cylinder;
    }
}
;
const people = ['alice', 'bob', 'jan'].map(name => {
    const person = { name };
    return person;
});
const peopleL1 = ['alice', 'bob', 'jan'].map((name) => ({ name }));
//# sourceMappingURL=Type.js.map