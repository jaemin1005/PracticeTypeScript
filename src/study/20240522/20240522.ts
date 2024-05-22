let fromData = {
  a : "1. 꽁꽁 얼어붙은",
  b : "2. 대전천 위로",
  d : "3. 고양이가 날라다닌다",
}

function TestA(){
  console.log(fromData.a);
}

function TestB(){
  console.log(fromData.b);
}

function TestC(){
  console.log(fromData.d);
}

//* 인터프리터 vs 컴파일
//* 1. 위에서 아래로,
//* 2. 왼쪽에서 오른쪽으로
//* 3. 하나읽고, 바로 실행
TestA();
TestB();
TestC();

//* 스탑워치 함수가 존재한다
//* 지정된 시간에 실행되는 함수
//* (순서가 어쨋건간에 새치기)
// setTimeout(function(){
//   console.log("고양이가 돌아 다닐까?");
// }, 500000000);

//!! TRAITOR !! 



setTimeout(function(){
  console.log("너구리가 공중 부야야야야야앙");

  setTimeout(function(){
    console.log("2. 공욱재가 늦잠을 잠");
  },500);

},500); 

console.time("작업");

//* 진배없다 :)
//* 자주봤으면 좋겠다.
//* 비동기처리라는 말을 안했다, 콜백이라는 말을했다
//* 비동기라고하면 어려워 할까봐.
//* 어떻게써먹어야할까
//* NodeJS는 고주스다
//* 맛있다. (의식 -50%)
//* 새치ㄹ기를 정렬하자
//* 머리를 식히고 점심을 먹자.
console.time("1");
setTimeout(function() {
  console.log("1.배성빈");
  console.timeLog("1");
  console.timeEnd("1");
  console.time("2");
  setTimeout(function() {
    console.log("2.김정수");
    console.timeEnd("2");
    setTimeout(function() {
      console.log("3.조우식");
    }, 1000);
  }, 2000);
}, 3000);

//* 중론의 경우는 익명함수이다.
console.timeEnd("작업");
let counter = 0;
const timer = function(){setTimeout(() => {
  console.log(`${counter++}vw`)
  timer();
}, 16)}

timer();