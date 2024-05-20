//! ITEM 22 타입 좁히기
//* 타입스크립트가 넓은 타입으로 부터 좁으 타입으로 진행하는 과정을 말함
//* 타입스크립트는 일반적으로 조건문에서 타입을 좁히는데 매우 능숙

//TODO : 분기문 외에도 여러 종류의 제어 흐름을 살펴보며 타입스크립트가 타입을 좁히는 과정을 이해해야 함.
//TODO : 태그된/구변된 유니온과 사용자 정의 타입 가드를사용하여 타입 좁히기 과정을 원할하게 만들 수 있어야 함.


class item22 {
  static Test(){
    const el = document.getElementById('foo'); //* 타입이 HTMLElement | null
    
    //* (1) 타입 좁히기.
    if(el){
      el //* HTMLElement
      el.innerHTML = 'Party Time'.blink();
    } else {
      el //* null
    }

    //* (2) 속성 체크 타입 좁히기
    function contains(text: string, search: string|RegExpConstructor){
      if(search instanceof RegExp){
        search //* RegExp
        return !!search.exec(text);
      }

      search //* string
      return text.includes(search);
    }

    function foo(x?: number| string | null){
      if(!x){
        x //* 빈 문자열 ''과 0 모두가 false가 되기 떄문에 타입이 좁혀지지 않는다.
      }
    }
  }
}

//* 태그된 유니온 또는 구별된 유니온 패턴.
interface UploadEvent {type : 'upload'; filename : string; contents: string};
interface DownloadEvent {type : 'download'; filename: string};
type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent){
  switch(e.type){
    case 'download':
      e
      break;
    case 'upload':
      e
      break; 
  }
}

//* 사용자 정의 타입 가드
//* 함수의 반환이 true일 경우 타입 체커에게 매개변수의 타입을 좁힐 수 있다고 알려줌
function isInputEleemnt(el : HTMLElement): el is HTMLInputElement {
  return 'value' in el;
}

function getElementContent(el: HTMLElement){
  if(isInputEleemnt(el)){
    el;
    return el.value;
  }

  el;
  return el.textContent;
}