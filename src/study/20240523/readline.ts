//* 초창기 컴퓨터의 모습은
//* 명령줄 -> 니 입력해 내가 확인할게 
//* npm, git, gui => 일반사용자용
//* GUI -> 한계 "개발자의 품삯이 너무 많이 들어간다"
//* 상업적인 비즈니스가 아닌이상 GUI 찾기 어렵다.

//* DI 초기화 -> package.json, readline라는 모듈이 CLI 환경으로 질문을 하고 우리가 답을 해주는 형태

import rl = require("readline");
import fs = require("fs");
//console.dir(rl);

let inOut = {
  input: process.stdin,
  output: process.stdout
}

//* CLI 환경에서 애플리케이션을 만들 수 있다.
//* Node.js의 built-in 환경
//* CLI 입출력 도구
//const readLine = rl.createInterface(inOut);
// readLine.question("좋아하는 동물은 무엇입니까? :", (anwser) => {

//   if(anwser === "고양이"){
//     console.log("정답");
//     readLine.resume();

//     readLine.question("어떤 고양이를 좋아합니까? :", (answer) => {
//       console.log(answer);
//     })

//   } else {
//     console.log("틀림 ㅋ");
//   }

//   readLine.close();
// });

interface ButterToString {
  toString : (encoding?: BufferEncoding | undefined, start?: number | undefined, end?: number | undefined) => string
}


const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

const pokemonData = fs.readFileSync("./pokemonNames.json", "utf8");
//console.log(pokemonData);

const pokemon : string[] = JSON.parse(pokemonData);

// readLine.question("포켓몬스터 이름 작성해주세요 : ", (answer) => {
//   if(pokemon.find(pokemonName => pokemonName == answer)){
//     console.log((pokemon.indexOf(answer) + 1) + "번쨰 존재하는 포켓몬이야");
//   }
//   else{
//     console.log("그런 포켓몬은 존재하지 않아");
//   }
//   readLine.close();
// })

readLine.question("포켓몬스터 이름 작성해주세요 : ", (answer) => {
  let data : Array<string> = [];
  pokemon.forEach((element) => {
    if(answer === element){
      data[data.length] = element;
      readLine.close();
    }
  });

  console.log(data);
  if(data.length === 0){
    console.log("포켓몬스터가 존재하지 않아");
  } else {
    console.log("포켓몬스터가 존재해");

    let findJson : ButterToString = fs.readFileSync("FindPokemon.json")
    let arrPokemon : string[] = JSON.parse(findJson.toString());
    arrPokemon[arrPokemon.length] = data[0];


    fs.appendFile("FindPokemon.json", JSON.stringify(arrPokemon), (err) => {
      if(err){
        console.log("파일 쓰기에 실패했어");
      }
    })
  }
  readLine.close();
})
