//* 해당 HTMInputElement가 확실함으로 타입 단언문.
let $inputDiv = document.getElementById("movediv")! as HTMLInputElement;
$inputDiv.addEventListener("click", intervalHandler(16));



/**
 * * Input Element의 이벤트 리스너.
 * @param time 
 * @returns 
 */
function intervalHandler(time : number){
  /** setInterval의 ID */
  let intervalId : NodeJS.Timeout | null;
  
  /** 움직일 박스 div */
  let $box = document.getElementById("box")! as HTMLDivElement;
  $box.style.position = "absolute"

  /** 가로측 방향성 */
  let widthDircetion : 1 | -1 = 1;
  /** 세로측 방향성 */
  let heightDirection : 1 | -1 = 1;

  return function(){
    
    /** 박스가 화면 가로 중앙에 위치할 수 있는 지점 */
    const widhtPt = document.body.clientWidth / 2 - $box.clientWidth / 2;
    /** 박스가 화면 세로 중앙에 위치할 수 있는 지점 */
    const heightPt = document.body.clientHeight / 2 - $box.clientHeight / 2;
  
    /**
     * * intervalId가 null이 아닌 상태는 애니메이션이 실행 중이라는 뜻
     * * 애니메이션을 중지하는 동작
     */
    if(intervalId != null){
      clearTimeout(intervalId);
      intervalId = null;
      return;
    } 

    /**
     * * 초기에 해당 애니메이션이 시작하는 지점
     */
    else{
      if($box.style.left =="" && $box.style.top ==""){
        $box.style.left = widhtPt.toString() + "px";
        $box.style.top = heightPt.toString() + "px";
      }
    }

    /* 애니메이션 실행 구간 */
    intervalId = setInterval(() => {
      /** 현재 가로 지점 */
      let curWidthPt = Number($box.style.left.replace("px", ""));
      /** 현재 세로 지점 */
      let curHeightPt = Number($box.style.top.replace("px",""));
      
      /** 왼쪽 화면 밖으로 해당 div가 나갈 때 */
      if(curWidthPt < 0){
        widthDircetion = -1;
      }
      
      /** 오른쪽 화면 밖으로 해당 div가 나갈 때 */
      else if(curWidthPt > document.body.clientWidth - $box.clientWidth){
        widthDircetion = 1;
      }

      /** 위족 화면 밖으로 해당 div가 나갈 때 */
      if(curHeightPt < 0){
        heightDirection = -1;
      }

      /** 아래 화면 밖으로 해당 div가 나갈 때 */
      else if(curHeightPt > document.body.clientHeight - $box.clientHeight){
        heightDirection = 1;
      }

      /** 위치 이동 */
      curWidthPt -= (10 * widthDircetion);
      curHeightPt -= (10 * heightDirection);
      $box.style.left = curWidthPt.toString() + "px";
      $box.style.top = curHeightPt.toString() + "px";
    }, time)
  }
}