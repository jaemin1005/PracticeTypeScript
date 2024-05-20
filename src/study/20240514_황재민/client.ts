import { CustomElement } from "./CustomClass";

let headerNavi = document.getElementById("header")!.children;
let body = document.getElementById("body")!;
let url = window.location.href;

let backgroundColor = ["#D9D9D9","#BDDE86","#86DEA9","#86A9DE","#AD86DE"];


//! 1번행동부터 10번행동까지 적어

/**
 * * 2024.05.14 황재민
 * * Header의 자식들에게 클릭이벤트를 더하여준다.
 */
let start = function(){

  for(let nIdx = 0 ; nIdx < headerNavi.length ; nIdx++){
    headerNavi[nIdx].addEventListener("click", BtnClickHandler(backgroundColor[nIdx]));
  }
}();

//* 현재 main 자식
let onClickElem : HTMLElement | null = null;

/**
 * * 2024.05.14 황재민
 * * 헤더 버튼 이벤트에 대한 핸들러
 * * 클릭하면 body의 자식이 변경된다.
 * @returns 
 */
function BtnClickHandler(color : string){

  let selectColor = color;
  return async function(this : HTMLElement){
    let target = this;
    let encodeData = encodeURI(target.textContent!);

    await fetch(url + "command/" + encodeData)
    .then(res => res.json())
    .then((obj : CustomElement) => {
      let returnObj = CreateElem(obj);

      //* body에 자식이 없을 경우
      if(body.children.length == 0){
        body.appendChild(returnObj);
        onClickElem = returnObj;
      }

      //* body에 자식이 있을 경우
      //* onClickElem, 현재 body의 자식을 제거 
      else{
        if(onClickElem != null){
          body.removeChild(onClickElem);
        }
        
        //* 새로운 body의 자식을 더해준다.
        onClickElem = returnObj;
        body.appendChild(returnObj);
      }
      
      //returnObj.style.backgroundColor = selectColor;
      //* CSSOM이 결합된, Render가 완성된 CSS, Style을 불러오기 위해
      //* window.getComputedStyle을 사용하였다.
      returnObj.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    })
  }
}

/**
 * * 2024.05.14 황재민
 * * 응답받은 객체를 이용하여, DOM Element를 만든다.
 * @param obj : Get으로 응답받은 객체
 * @returns 
 */
function CreateElem(obj : CustomElement){
  
  let returnObj = document.createElement(obj.name);
  
  if(obj.style != undefined){
    for(let key in obj.style){
        returnObj.style[key] = obj.style[key]!;
    }
  }

  if(obj.property != undefined){
    const keys = Object.keys(obj.property) as (keyof typeof obj.property)[];
    for(let key of keys){
      (returnObj as any)[key] = obj.property[key];
    }
  }

  return returnObj;
}
