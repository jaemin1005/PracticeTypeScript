let $inputDiv = document.getElementById("movediv")! as HTMLInputElement;
$inputDiv.addEventListener("click", intervalHandler(16));




function intervalHandler(time : number){
  let intervalId : NodeJS.Timeout | null;
  let $box = document.getElementById("box")! as HTMLDivElement;
  $box.style.position = "absolute"
  let widthDircetion : 1 | -1 = 1;
  let heightDirection : 1 | -1 = 1;

  return function(){
    
    const widhtPt = document.body.clientWidth / 2 - $box.clientWidth / 2;
    const heightPt = document.body.clientHeight / 2 - $box.clientHeight / 2;
  
    if(intervalId != null){
      clearTimeout(intervalId);
      intervalId = null;
      return;
    } 

    else{
      if($box.style.left =="" && $box.style.top ==""){
        $box.style.left = widhtPt.toString() + "px";
        $box.style.top = heightPt.toString() + "px";
      }
    }

    intervalId = setInterval(() => {
      let curWidthPt = Number($box.style.left.replace("px", ""));
      let curHeightPt = Number($box.style.top.replace("px",""));
      if(curWidthPt < 0){
        widthDircetion = -1;
      }
      
      else if(curWidthPt > document.body.clientWidth - $box.clientWidth){
        widthDircetion = 1;
      }

      if(curHeightPt < 0){
        heightDirection = -1;
      }

      else if(curHeightPt > document.body.clientHeight - $box.clientHeight){
        heightDirection = 1;
      }

      // else {
      //   let bDirection = Math.random() < 0.5;
      //   heightDirection = bDirection == true ? 1 : -1;
      // }

      curWidthPt -= (10 * widthDircetion);
      curHeightPt -= (10 * heightDirection);
      $box.style.left = curWidthPt.toString() + "px";
      $box.style.top = curHeightPt.toString() + "px";
    }, time)
  }
}