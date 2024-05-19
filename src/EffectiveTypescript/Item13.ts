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

//* 유니온 타입은 있지만, 유니온 인터페이스라는 개념은 없음.
type AorB = 'a' | 'b';

type Input = {};
type Output = {};

//* Input과 Output은 별도의 타입이며, 이 둘을 하나의 변수명으로 매핑하는 VariableMap인터페이스를 만들 수 있음.
interface VariableMap{
  [name : string] : Input | Output;
}

type NamedVariavle = (Input | Output) & {name:string};

//* 튜블과 배열 타입도 type 키워드를 통해 더 간결하게 표현할 수 있다.
type Pair = [number, number];
type StringList = string[];
type namedNums = [string, ...number[]];

//* 인터페이스로도 튜블과 비슷하게 구현할 수 있다.
//* 하지만 튜플에서 사용할 수 있는 concat같은 메서드들을 사용할 수 없음
interface Tuple{
  0: number;
  1: number;
  length: 2;
}

const t : Tuple = [10,20];

//* 선언 병합
interface IState{
  name : string;
  capital : string;
}

interface IState{
  population : number;
}

const wyoming : IState = {
  name : "Wyoming",
  capital : "Cheyenne",
  population: 500_000
}

