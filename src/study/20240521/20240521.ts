//* Node.js : 메서드가 분야별로 너무 많다 ㅎㅎ...
import fs = require("fs");
import { NowDate } from "./NowDate";



const testObj = {
  name : "공욱재",
  age : 22,
  city: "대전"
}

const htmlMarkup = {
  head : {
    title : "JSON 연습"
  },
  body : {
    header : "메뉴부분",
    main: "메인부분",
    footer: "하단부분"
  }
}



//* 사실상 너무 많이 쓰인다. ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ 
//* Javascript object notation: JSON ( 자바스크립트 객체 표기법)
//* 객체를 -> JSON으로 바꿔주는 -> stringify();
//* JSON을 -> 객체로 -> JSON.parse();
fs.writeFile(NowDate() + "_htmlMarkUp.json", JSON.stringify(htmlMarkup,null,2), "utf-8",(err) => {
  if(err) throw err;
  console.log ("쿠궁 쿵 쿠쿠구우구구두구구구궁");
})


