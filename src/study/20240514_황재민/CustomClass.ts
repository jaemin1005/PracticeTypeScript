interface ICustomElement{
  name : keyof HTMLElementTagNameMap;
  property : Partial<HTMLElement>;
  style? : Partial<CSSStyleDeclaration>; 
}

// class CustomElement<T extends keyof HTMLElementTagNameMap> implements ICustomElement{

//   public name;
//   public property: Partial<HTMLElementTagNameMap[T]>;  
//   public style : Partial<CSSStyleDeclaration> | undefined;
//   public children: CustomElement<any>[] = [];

//   constructor(name : T, property : Partial<HTMLElementTagNameMap[T]>, style : Partial<CSSStyleDeclaration> | undefined){
//     this.name = name;
//     this.property = property;
//     this.style = style;
//   }

//   AddChilderen<U extends keyof HTMLElementTagNameMap>(child : CustomElement<U>){
//     this.children[this.children.length] = child;
//   }
// }

export class CustomElement implements ICustomElement {
  public name: keyof HTMLElementTagNameMap;
  public property: Partial<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>;
  public style: Partial<CSSStyleDeclaration> | undefined;
  public children: CustomElement[] = [];

  constructor(name: keyof HTMLElementTagNameMap, property: Partial<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>, style: Partial<CSSStyleDeclaration> | undefined) {
    this.name = name;
    this.property = property;
    this.style = style;
  }

  AddChild(child: CustomElement) {
    this.children.push(child);
  }
}