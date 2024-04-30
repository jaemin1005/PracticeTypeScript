var root = document.getElementById("root");
var blackStyle = {
    id: "black",
    textContent: "black",
    style: {
        width: "200px",
        height: "300px",
        backgroundColor: "white"
    }
};
var whiteStyle = {
    id: "white",
    textContent: "white",
    style: {
        width: "200px",
        height: "200px",
        backgroundColor: "black"
    }
};
var childDOM = [blackStyle, whiteStyle];
for (var _i = 0, childDOM_1 = childDOM; _i < childDOM_1.length; _i++) {
    var child = childDOM_1[_i];
    var element = document.createElement("div");
    var assignObj = Object.assign(element, child);
    root.appendChild(assignObj);
}
var clickEvent = function () {
    var bBlack = true;
};
function test() {
    var assginObj = Object.assign({}, { id: "jamein" });
    return assginObj;
}
console.log(test());
