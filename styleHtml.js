"use strict";
const root = document.getElementById("root");
let blackStyle = {
    id: "black",
    textContent: "black",
    style: {
        width: "200px",
        height: "300px",
        backgroundColor: "white"
    }
};
let whiteStyle = {
    id: "white",
    textContent: "white",
    style: {
        width: "200px",
        height: "200px",
        backgroundColor: "black"
    }
};
const childDOM = [blackStyle, whiteStyle];
for (let child of childDOM) {
    const element = document.createElement("div");
    const assignObj = Object.assign(element, child);
    root.appendChild(assignObj);
}
let clickEvent = function () {
    let bBlack = true;
};
function test() {
    const assginObj = Object.assign({}, { id: "jamein" });
    return assginObj;
}
console.log(test());
//# sourceMappingURL=styleHtml.js.map