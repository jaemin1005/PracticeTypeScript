type TState = {
  name : string;
  capital : string;
}

interface ISate {
  name: string;
  capital: string;
}

type TDict = {
  [key: string] : string;
}

interface IFn{
  (x: number) : string;
}

type TFnWidhProperties = {
  (x : number) : number;
  prop: string;
}


interface IFnWidhProperties{
  (x: number) : number;
  prop : string;
}

//* 제네릭 사용 가능 
type TPair<T> = {
  frist : T;
  secont : T;
}

interface IPair<T>{
  first : T;
  second : T;
}

//* 인터페이스는 타입을 확장할 수 있다.
interface IStateWithPop extends TState{
  population : number;
}

//* 타입은 인터페이스를 확장할 수 있다.
//* 인터페이스는 유니온 타입 같은 복잡한 타입을확장하지 못한다.
type TStateWithPop = ISate & { population : number }

//* 타입을 통한 클래스 구현
class StateT implements TState{
  name: string = '';
  capital: string = '';
}