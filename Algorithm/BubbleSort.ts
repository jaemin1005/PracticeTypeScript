/**
 * * 버블정렬
 * @param {*} arr : 정렬할 배열 
 */
function BubbleSort(arr : Array<number>){

  let nTemp : number;

  //* 해당값을 쌍으로 비교해야 되기 때문에는 length-1이다, length로 하였을 경우 배열길이를 초과하여 비교한다. 
  for(let i = 0 ; i < arr.length-1 ; i++){
    //* lenght - (i+1)인 이유는 순회하면 정렬된 값이 마지막에 넣어지기 때문에
    for(let j = 0 ; j < arr.length-(1+i) ; j++){
      if(arr[j] > arr[j+1]){
        nTemp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = nTemp;
      }
    }
  }
}

let tempArr = [5, 20, 30 ,11, 20, 24];
BubbleSort(tempArr);
console.log(tempArr);