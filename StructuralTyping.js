"use strict";
function calculateLengh(v) {
    return Math.sqrt(v.x * v.x + v.y + v.y);
}
function normalize(v) {
    const length = calculateLengh(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length
    };
}
console.log(normalize({ x: 3, y: 4, z: 5 }));
// function calculateLengthL1(v: Vector3D){
//   let length = 0;
//   for(const axis of Object.keys(v)){
//     const coord = v[axis];
//   }
// }
class C {
    constructor(foo) {
        this.foo = foo;
    }
}
const c = new C('instance of C');
const d = { foo: 'object literal' };
//# sourceMappingURL=StructuralTyping.js.map