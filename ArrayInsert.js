"use strict";
/**
 * * ArrayInsert는 Array의 외부 Value를 Insert해주는 함수이다.
 * @param arr : 원본 배열
 * @param item : 추가할 Value
 * @param idx  : 추가할 곳, index
 * @returns : value가 insert된, 변환된 배열을 반환한다.
 */
function ArrayInsert(arr, item, idx) {
    // * 반환되는 새로운 배열
    let newArray = [];
    // * 현재 idx에 value가 삽입되어있는지 확인
    function IsIndexAfterInsertionPoint(currentIdx) {
        return currentIdx > idx;
    }
    // * 배열을 삽입해주는 for..문
    for (let nIdx = 0; nIdx < arr.length; nIdx++) {
        // * 삽입하여야할 인덱스이면 해당 value를 삽입한다.
        if (nIdx == idx) {
            newArray[nIdx] = item;
        }
        // * 현재 삽입되고 난 후면, newArray 랑 arr의 idx가 가리키는 것이 다르다. 
        // * newArray 인 경우 삽입이 됬으므로 lengh가 newArray.length - 1 == arr.length 와 같다. 
        else if (IsIndexAfterInsertionPoint(nIdx) === true) {
            newArray[nIdx] = arr[nIdx - 1];
        }
        // * 삽입되어야할 곳 전까지, 그대로 삽입해준다.
        else {
            newArray[nIdx] = arr[nIdx];
        }
    }
    return newArray;
}
//* 배열 하나 만들어 주자
let planets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
//* 함수를 호출하는데, 얘를 변수로 담네? 그럼 이건 겂인가
let updatePlanet = ArrayInsert(planets, "명왕성", 5);
//# sourceMappingURL=ArrayInsert.js.map