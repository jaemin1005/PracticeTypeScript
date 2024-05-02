function BubbleSort(arr : Array<number>){

  let nTemp : number;

  for(let i = 0 ; i < arr.length-1 ; i++){
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