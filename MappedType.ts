interface State{
  userId : string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

//* 부분만 표현하는 TopNavState를 확장하여 State를 구성하기보다는
//* State의 부분 집합으로 TopNavState를 정의한다.

type TopNavState = {
  userId : State['userId'];
  pageTitle : State['pageTitle'];
  recentFiles : State['recentFiles'];
};

//* 매핑된 타입을 사용해서 해결해보자
//* 매핑된 타입은 배열의 필드를 루프 도는 것과 같은 방식 
type TopNavStateL1 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles'] : State[k];
}

//* 이 패턴은 표준라이브러리에서도 일반적으로 찾을 수 있으며, Pick방식이라고 한다.
//! type PickL1<T, K> = { [k in K] : T[K]};
type TopNavStateL2 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

//* 태그된 유니온에서도 다른 형태의 중복이 발생할 수 있음. 
interface SaveAction{
  type : 'save';
}

interface LoadAction{
  type : 'load';
}

type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load';

//* Action 유니온을 인덱싱하면 타입 반복 없이 ActionType 정의
//* Action 유니온에 타입을 더 추가하면 ActionType은 자동적으로 그 타입을 포합한다.
//* ActionType은 Pick을 사용하여 얻게 되는, Type속성을 가지는 인터페이스와 다르다.
type ActionTypeL1 = Action['type']; //! "save" | "load"

type ActionTypeL2 = Pick<Action, 'type'>; //! {type : "save" | "load"}

interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

interface OptionsUpdate{
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}

class UIWidget{
  constructor(init: Options){}
  //! == update(options: Partial<Options>)
  update(options: OptionsUpdate){}
}

//* 매핑된 타입과 keyof를 사용하면 Options로 부터 OptionsUpdate를 만들 수 있음.
//! keyof는 타입을 받아서 속성 타입의 union을 반환한다.
//! 이 패턴은 아주 일반적이며, Partial이라는 이름이로 포함되어 있다.
type OptionsUpdateL1 = {
  [k in keyof Options]? : Options[k];
}

//* 값의 형태의 타입을 정의하고 싶을 때
const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "$00FF00",
  label: "VGA"
}

interface Options{
  width: number;
  height: number;
  color: string;
  label: string;
}

//* 이 코드는 자바스크립트의 런타인 연산자 typeof 를 사용한 것 처럼 보이지만,
//* 실제로는 타입스크립트 단계에서 연산된것이며 훨씬 더 정확하게 타입을 표현한다.
//! 값의 관점에서는 typeof는 런타임의 typeof이다.
//! 타입 관점에서는 typeof는 값을 읽어 타입스크립트 타입을 반환한다.
type OptionsL1 = typeof INIT_OPTIONS;

//* 함수나 메서드의 반환 값에 명명된 타입을 만들고 싶을 때.
function getUserInfo(userId: string){
  return {
    userId,
  }
}

//! 해당 ReturnType에는 typeof는 값이 아니라 타입이 적용되어있다
type UserInfo = ReturnType<typeof getUserInfo>;

//* extends를 이용해 Pick 구현
type PickL1<T, K extends keyof T> = {
  [k in K]: T[k]
}

type TopNavStateL3 = Pick<State, 'userId'>;