//#region --Mixin--

/**
 * * 타입 스크립트는 전적으로 구조 타입을 기반으로 타입을 판단한다. 
 * * new로 만들 . 수있는 모든 것을 생성자로 규정한다.
 * * new() 코드를 생성자 시그니처라 부르며, 생성자 시그니처는 new 연산자로 해당 타입을 인스턴스화 할 수 있음을 정의하는 타입스크립틔 방식
 */
type ClassConstructor<T> = new (...args: any[]) => T;
// * C는 최소한 클래스 생성자여야 한다. (즉 ClassConstructor에서 정의한 클래스 생성자 조건을 만족해야 한다.)
function withEZDebug<C extends ClassConstructor<{getDebugValue() : object}>>(Class : C)
{
  return class extends Class {
    debug() {
      let Name = this.constructor.name;
      let value = this.getDebugValue();
      return Name + '(' + JSON.stringify(value) + ')';
    }      
  }
}

class HardToDebugUser{
  constructor(private id: number, private fristName: string, private lastName:string)
  {}

  getDebugValue() 
  {
    return {
      id: this.id,
      name : this.fristName + ' ' + this.lastName
    }
  }
}

let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
console.log(user.debug());
//#endregion --Mixin--
