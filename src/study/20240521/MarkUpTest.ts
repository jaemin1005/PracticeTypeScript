const htmlMarkup = {
  head : "헤드",
  body : "바디"
}

interface HtmlMarkup {
  [tag : string] : string;
}

let testLog = test(htmlMarkup);
console.log(testLog);

//* 객체를 객체로만 쓰는 것이 아니라.
//* JSON 호환성이 높은 데이터포멧 key, value에 대한 응용 가능성
//* 객체 편집, 핸들링하는 작업
//* JSON을 저장, 처리된걸 써먹고
//* 완벽이 됬다. JSON 어렵지가 않다. 느껴지면
//* POST랑 해서 붙어버린다.
//* JSON 처리한것을 저장하고
function test(obj : HtmlMarkup): string {
  let result : string[] = [];

  for(let key in obj){
    result.push(`<${key}>${obj[key]}</${key}>`);
  }
  
  return result.join("");
}