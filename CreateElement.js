"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a;
let names = [
    "구하림",
    "김보미",
    "김수현",
    "김정수",
    "문혜림",
    "배성빈",
    "백지원",
    "송이현",
    "신지윤",
    "유으뜸",
    "유호영",
    "이연승",
    "이재영",
    "이종수",
    "임유진",
    "정호연",
    "조우식",
    "조자연",
    "최유진",
    "황재민"
];
let color = [
    "Red",
    "Blue",
    "Yellow",
    "Black"
];
let backgroundColor = "white";
let CreateElement = (_a = class {
        static AppendChild() {
            const h1 = document.createElement("h1");
            h1.textContent = "황재민";
            this.root.append(h1);
        }
        static AppendListUsingValue([...values]) {
            const ul = document.createElement("ul");
            // for(let value of values )
            // {
            //   let li = document.createElement("li");
            //   li.textContent = value;
            //   ul.appendChild(li);
            //   this.root.append(ul);
            // }
            for (let nIdx = 0; nIdx < values.length; nIdx++) {
                let li = document.createElement("li");
                li.textContent = values[nIdx];
                let selectColor = color[nIdx % color.length];
                li.style.color = selectColor;
                li.addEventListener("click", IsVisivbleElement(selectColor));
                ul.appendChild(li);
            }
            this.root.appendChild(ul);
        }
    },
    __setFunctionName(_a, "CreateElement"),
    _a.root = document.getElementById("root"),
    _a);
// CreateElement.AppendChild();
CreateElement.AppendListUsingValue(names);
function IsVisivbleElement(selectColor) {
    let color = selectColor;
    let bVisible = true;
    return function () {
        bVisible = !bVisible;
        let strAttrValue = bVisible == true ? color : backgroundColor;
        this.style.color = strAttrValue;
    };
}
//# sourceMappingURL=CreateElement.js.map