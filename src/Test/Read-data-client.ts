let root = document.getElementById("root");

fetch("http://localhost:3000/data.json", {
  method : "GET"
})
.then(respose => respose.json())
.then(data => {
  PokeDex(data);
})
.catch(err => console.log(err));


function PokeDex(data : []){
  let curPokeDex : HTMLElement = document.createElement("div");
  let nIdx = 0;
  let arrPokeDex : Array<HTMLElement> = [];

  let AddCurPokeDex = function(color : string, name : string){
    curPokeDex = easyCreateElem("div", {color : `${color}`}, {textContent : `${name}`});
    arrPokeDex[nIdx++] = curPokeDex;
  }

  for(let i = 0; i < data.length ; i++){
    if(i == 0) AddCurPokeDex("red", "관동도감");
    if(i == 151) AddCurPokeDex("green", "성도도감");
    if(i == 251) AddCurPokeDex("Pink", "호연도감");
    if(i == 356) AddCurPokeDex("skyblue", "신오도감");
    if(i == 493) AddCurPokeDex("grey", "하나도감");
    if(i == 649) AddCurPokeDex("blue", "칼로스도감");
    if(i == 721) AddCurPokeDex("orange", "알로라도감");
    if(i == 809) AddCurPokeDex("purple", "가라르도감");
    if(i == 905) AddCurPokeDex("yellow", "팔데아도감");

    let createElem = easyCreateElem("div", {color: "black", fontSize: "0.5rem", display: "none"}, {textContent : `${data[i]}`})
    curPokeDex.appendChild(createElem);
  }

  let clickFunc = function(){
    let click = false;

    return function(this: HTMLElement){
      let context = this;
      click = !click;
      for(let child of Array.from(context.children)){
        let childElem = child as HTMLElement;
        if(click == true)
          childElem.style.display = "block";
        else
          childElem.style.display = "none";
      }
    }
  }

  for(let i = 0 ; i < arrPokeDex.length ; i++){
    arrPokeDex[i].addEventListener("click", clickFunc());
    root?.appendChild(arrPokeDex[i]);
  }
}

function easyCreateElem<T extends keyof HTMLElementTagNameMap>(name : T, styles : Partial<CSSStyleDeclaration>, property : Partial<HTMLElementTagNameMap[T]>){
  const elem = document.createElement(name);
  const keys = Object.keys(property) as (keyof typeof property)[];

  for(let key of keys){
    elem[key] = property[key]!  
  }

  for(let key in styles){
    elem.style[key] = styles[key]!;
  }
  return elem;
}