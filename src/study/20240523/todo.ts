import rl = require('readline');
import fs = require('fs');
const pokemonData : string[] = JSON.parse(fs.readFileSync("./pokemonNames.json").toString());

const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

let answerData : Array<string>= [];
let score = 0;

type question = (question : string) => void;

// let question = function(title : string) : void {
//   readLine.question(title, function(answer : string){
//     // todo : 1. 답변을 받는다.
//     // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
//     // todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
//     // todo : 4. 존재한다면, score를 1점 추가한다.
//     // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
//     // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
//     // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다. 
  
//     answer = answer.trim();

//     //* todo : 2   
//     if(pokemonData.length === 0){
//       console.log("프로그램 오류 : 데이터 파싱")
//     }
    
//     if(answer === "종료"){
//       console.log(`포켓몬스터 ${score}개를 입력하였습니다`);
//       readLine.close();
//       return;
//     }

//     if(answerData.find(name => name === answer)){
//       console.log("이미 있는 데이터야. 다시 입력해줘");
//     }

//     else{
//       if(pokemonData.find(name => name === answer)){
//         console.log("존재하는 포켓몬이야 +1 점");
//         answerData[answerData.length] = answer;
//         score++;
//       }

//       else{
//         question("존재하지 않는 포켓몬이야. 다시 입력해 줄래? : ")
//         return;
//       }
//     }
    
//     question("포켓몬스터 이름 작성해주세요 : ");
//   });
// }

// question("포켓몬스터 이름 작성해주세요 : ");

let questionL1 = function() : (question : string) => void {

  let mainQuestion = "포켓몬스터 이름 작성해주세요 : ";
  let failQuestion = "존재하지 않는 포켓몬이야. 다시 입력해 줄래? : "

  return function(this : question, question : string = mainQuestion){
    let func = this;
    let selectQuestion : string | null = null;

    readLine.question(question, function(answer : string){
      // todo : 1. 답변을 받는다.
      // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
      // todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
      // todo : 4. 존재한다면, score를 1점 추가한다.
      // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
      // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
      // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다. 
    
      answer = answer.trim();
  
      //* todo : 2   
      if(pokemonData.length === 0){
        console.log("프로그램 오류 : 데이터 파싱")
      }
      
      if(answer === "종료"){
        console.log(`포켓몬스터 ${score}개를 입력하였습니다`);
        readLine.close();
        return;
      }
  
      if(answerData.find(name => name === answer)){
        console.log("이미 있는 데이터야. 다시 입력해줘");
      }
  
      else{
        if(pokemonData.find(name => name === answer)){
          console.log("존재하는 포켓몬이야 +1 점");
          selectQuestion = mainQuestion;
          answerData[answerData.length] = answer;
          score++;
        }
  
        else{
          selectQuestion = failQuestion;
        }
      }
      
      if(selectQuestion == null){
        func(mainQuestion);
      }
      else{
        func(selectQuestion);
      }
    });
  }
}

let questionL2 = questionL1();
questionL2("포켓몬스터 이름 작성해주세요 : ");


