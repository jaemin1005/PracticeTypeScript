"use strict";
class CreateDinamicStyle {
    DynamicElement(elementName, elementStyle, style) {
        let $input = document.createElement(elementName);
        CreateDinamicStyle.SetProperty($input, elementStyle);
        CreateDinamicStyle.SetStyle($input, style);
        return $input;
    }
    static SetStyle(element, style) {
        if (style == null)
            return;
        for (let property in style) {
            element.style[property] = style[property];
        }
    }
    static SetProperty(element, elementStyle) {
        if (elementStyle == null)
            return;
        element = Object.assign(element, elementStyle);
    }
}
let findBody = document.getElementsByTagName("body")[0];
let createDinamicStyle = new CreateDinamicStyle();
let containerElement = createDinamicStyle.DynamicElement("div", { textContent: "연회색" }, { width: "100vw", height: "100vh", backgroundColor: "#d9d9d9" });
let itemElement = createDinamicStyle.DynamicElement("div", { textContent: "회색" }, { width: "50vw", height: "100vh", backgroundColor: "#b0b0b0", position: "absolute", zIndex: "1" });
let inputElement = createDinamicStyle.DynamicElement("input", { textContent: "진회색" }, { width: "100px", height: "100px", margin: "50px", backgroundColor: "#808080" });
itemElement.appendChild(inputElement);
containerElement.appendChild(itemElement);
findBody.appendChild(containerElement);
inputElement.addEventListener("click", ClickEvent(inputElement, null, { backgroundColor: "black" }));
function ClickEvent(context, transProperty, transStyle) {
    let originObj = Object.assign({}, context);
    let originStyle = Object.assign({}, context.style);
    let bTrans = false;
    return function () {
        let element = this;
        bTrans = !bTrans;
        if (bTrans === true) {
            CreateDinamicStyle.SetProperty(element, transProperty);
            CreateDinamicStyle.SetStyle(element, transStyle);
            itemElement.removeChild(context);
            itemElement.style.visibility = "hidden";
            containerElement.appendChild(context);
        }
        else {
            CreateDinamicStyle.SetProperty(element, originObj);
            CreateDinamicStyle.SetStyle(element, originStyle);
            itemElement.appendChild(context);
            itemElement.style.visibility = "visible";
            containerElement.removeChild(context);
        }
    };
}
//# sourceMappingURL=DynamicElement.js.map