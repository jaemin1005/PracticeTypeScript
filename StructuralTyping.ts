interface Vector2D{
  x: number,
  y: number
}

interface Vector3D{
  x: number,
  y: number,
  z: number
}

function calculateLengh(v : Vector2D) : number{
  return Math.sqrt(v.x * v.x + v.y +v.y);
}

function normalize(v: Vector3D)
{
  const length = calculateLengh(v);
  return{ 
    x : v.x / length, 
    y : v.y / length, 
    z : v.z / length}
}

console.log(normalize({x: 3, y: 4, z: 5}));

// function calculateLengthL1(v: Vector3D){
//   let length = 0;

//   for(const axis of Object.keys(v)){
//     const coord = v[axis];
//   }
// }

class C {
  foo : string;
  constructor(foo : string)
  {
    this.foo = foo;
  }
}

const c = new C('instance of C');
const d: C = {foo : 'object literal'}