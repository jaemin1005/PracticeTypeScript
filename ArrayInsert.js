function ArrayInsert(arr, item, idx) {
    var newArray = [];
    function IsIndexAfterInsertionPoint(currentIdx) {
        return currentIdx > idx;
    }
    for (var nIdx = 0; nIdx < arr.length; nIdx++) {
        if (nIdx == idx) {
            newArray[nIdx] = item;
        }
        else if (IsIndexAfterInsertionPoint(nIdx) == true) {
            newArray[nIdx] = arr[nIdx - 1];
        }
        else {
            newArray[nIdx] = arr[nIdx];
        }
    }
    return newArray;
}
//* 배열 하나 만들어 주자
var planets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
//* 함수를 호출하는데, 얘를 변수로 담네? 그럼 이건 겂인가
var updatePlanet = ArrayInsert(planets, "명왕성", 5);
for (var idx = 0; idx < updatePlanet.length; idx++) {
    console.log(updatePlanet[idx]);
}
