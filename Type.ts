type A = 'A';
type B = 'B';
type Twelve = 12;
type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;


class Type {
   a : AB = 'A';
   //c : AB = 'C';
   ab : AB = Math.random() < 0.5 ? 'A' : 'B';
   ab12 : AB12 = this.ab;

   Test(){
    let b : PersonSpan = {
      name : "hi",
      birth : new Date(),
    }
    //문제는 바로 상태 값의 두 가지 속성이 동시에 정보가 부족하거나 두가지 속성이 충돌할 수 있다는 것입니다.
    //let c : UnionType = {} 
    let c : UnionType = {
      name : "HI"
    }
   }
}

interface Identified{
  id: string;
}

interface Person{
  name: string;
}

interface Lifespan{
  name : string
  birth: Date;
  death?: Date;
}


//* 왜 먼저 유니온 인터렉션을 먼저 소개 했을까?
//* 값의 집합(타입의 범위에) 적용된다. ?????????
//* 값의 집합을 타입이라고 생각하자...
type PersonSpan = Person & Lifespan;
type UnionType = Person | Lifespan;

type k = keyof PersonSpan
type l = keyof UnionType

class Cylinder {
  radius = 1;
  height = 1;

  calculateVloume(shape : unknown)
{
  if(shape instanceof Cylinder)
  {
    shape.radius = 1;
  }
}

  test()
  {

    const v = typeof Cylinder;
    type T = typeof Cylinder;
  }
}

const v = typeof Cylinder;
type T = typeof Cylinder;

declare let fn: T;
const ceee = new fn();

type M = InstanceType<typeof Cylinder>
