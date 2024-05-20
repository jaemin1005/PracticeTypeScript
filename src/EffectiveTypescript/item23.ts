//! ITEM 23 한꺼번에 객체 생성하기
//TODO : 속성을 제각각 추가하지 말고 한꺼번에 객체로 만들어야 한다.
//TODO : 안전한 타입으로 속성을 추가하려면 객체 전개를 사용하여야 한다,
//TODO : 객체에 조건부로 속성을 추가하는 방법을 익혀야한다.
//* 객체 전개 연산자... 



declare let hasDates: boolean;

class itme23{
  
  Test(){
    const pt = {x:3, y:4};
    const id = {name: 'Pythagoras'};
    const namedPoint = {};
    Object.assign(namedPoint, pt, id);
    namedPoint.name; //* {} 형식에 name' 속성이 없습니다.
    
    const namedPointL1 = {...pt, ...id};
    namedPointL1.name;


    function addOptional<T extends object, U extends object>(a: T, b: U | null) : T & Partial<U>{
      return {...a, ...b};
    }

    const nameTitle = {name: "Khufu", title: "Pharaoh"};

    const pharaoh = addOptional(nameTitle, hasDates ? {start:-2589, end:-2566} : null);
  }
}