export class CreateDinamicStyle{
  DynamicElement(elementName : string, property : Partial<HTMLElement> ,style :  Partial<CSSStyleDeclaration>){
    let $input = document.createElement(elementName);

    CreateDinamicStyle.SetProperty($input, property);
    CreateDinamicStyle.SetStyle($input, style);

    return $input;
  }

  static SetStyle(element : HTMLElement, style? :  Partial<CSSStyleDeclaration> | null)
  {
    if(style == null)
      return;

    for(let property in style){
      element.style[property] = style[property]!;
    }
  }

  static SetProperty(element : HTMLElement, property :  Partial<HTMLElement> | null)
  {
    if(property == null)
      return;

    element = Object.assign(element, property);
  }
}