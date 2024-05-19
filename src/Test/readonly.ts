//* readonly로 선언할 시
//! 타입스크립트는 매개변수가 함수 내에서 변경이 일어나는지 체크
//! 호출하는 쪽에서 함수가 매개변수를 변경하지 않는다는 보장을 받게됨
//! 호출하는 쪽에서 함수에 readonly 배열을 매개변수로 넣을 수도 있습니다.

function arraySum(arr: readonly number[]){
  // let sum = 0, num;
  // while((num = arr.pop()) != undefined){
  //   sum += num;
  // }

  // return sum;

  let sum = 0;
  for(const num of arr){
    sum += num;
  }

  return sum;
}

function printTriangles(n: number){
  const nums = [];
  for(let i = 0 ; i < n; i++){
    nums.push(i);
    console.log(arraySum(nums));
  }
}

printTriangles(5);

function parseTaggedText(lines: string[]) : string[][]{
  const paragraphs: string[][] = [];
  const currPara: string[] = [];

  const addParagraph = () => {
    if( currPara.length ){
      paragraphs.push(currPara);
    }
  };

  for(const line of lines){
    if(!line){
      addParagraph();
    }else{
      currPara.push(line);    
    }
  }
}
