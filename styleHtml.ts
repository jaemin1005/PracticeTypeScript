const root : HTMLElement = document.getElementById("root")!;
// const child = root.children[0] as HTMLElement;
// console.log(child.style.color);

type DOMType = {
  id : string,
  textContent : string,
  style? : {
    width? : string,
    height?: string,
    backgroundColor? : string
  }
}

let blackStyle : DOMType = {
  id : "black",
  textContent: "black",
  style : {
    width : "200px",
    height : "300px",
    backgroundColor : "white"
  }
}

let whiteStyle : DOMType = {
  id : "white",
  textContent : "white",
  style : {
    width : "200px",
    height : "200px",
    backgroundColor : "black"
  }
}

const childDOM : DOMType[] = [blackStyle, whiteStyle];

for(let child of childDOM){
  const element = document.createElement("div");
  const assignObj =  Object.assign(element, child);
  root.appendChild(assignObj);
}

let clickEvent = function(){
  let bBlack = true;
}

function test():object{
  const assginObj = Object.assign({}, {id : "jamein"});
  return assginObj;
}

console.log(test());