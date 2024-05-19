class CreateHTML{
  private $root : HTMLElement
  private $todoInput : HTMLInputElement
  private $orderSelect : HTMLSelectElement
  private arrTodoItmes : Array<string>

  constructor(){
    this.$root = document.getElementById("root")!
    this.$todoInput = document.getElementById("todo-input") as HTMLInputElement;
    this.$orderSelect= document.getElementById("order-select") as HTMLSelectElement;
    this.arrTodoItmes = new Array();


    let $addButton = document.getElementById("add-button") as HTMLButtonElement;
    let $removeButton = document.getElementById("remove-button") as HTMLButtonElement;
    $addButton.addEventListener('click', this.AddItem.bind(this));
    $removeButton.addEventListener('click', this.RemoveItem.bind(this));
    window.addEventListener("keypress", (event) => this.EnterEvent.call(this,event));
    
    this.UpdateSelectOption();
  }

  EnterEvent(event : KeyboardEvent){
    if(event.key === "Enter")
      document.getElementById("add-button")?.click();
  }

  GetInputValue() : string {
    return this.$todoInput.value.trim();
  }

  GetOrder(){
    let orderValue = this.$orderSelect.value;
    if(orderValue === "마지막"){
      return this.arrTodoItmes.length - 1;
    }
    else{
      return parseInt(orderValue);
    }
  }

  UpdateView(){
    this.$root.innerHTML = "";
    let color : string = "black";
    for(let nIdx = 0 ; nIdx < this.arrTodoItmes.length ; nIdx++){
      let strTxt = this.arrTodoItmes[nIdx];
      if(strTxt[strTxt.length-1] == "!")
        color = "red";
      if(strTxt[strTxt.length-1] == "?")
        color = "green";


      let $item = document.createElement("p");
      $item.style.color = color;
      $item.textContent = `${this.arrTodoItmes[nIdx]}`;
      this.$root.appendChild($item);
    }

    this.UpdateSelectOption();
  }

  UpdateSelectOption(){
    let nArrTodoItemsLength = this.arrTodoItmes.length;
    this.$orderSelect.innerHTML = '';
    for(let nIdx = 0; nIdx < nArrTodoItemsLength ; nIdx++){
      let $option = document.createElement("option");
      $option.value = nIdx.toString();
      $option.text = `항목 ${(nIdx + 1).toString()}`;
      this.$orderSelect.appendChild($option);
    }

    let $lastOption = document.createElement("option");
    $lastOption.value = "마지막"
    $lastOption.text = "마지막"
    this.$orderSelect.appendChild($lastOption);
  }

  AddItem(){
    //* This를 쓰면 button에사 해당 함수를 호출하기 때문에, button이 할당된다ㅣ 
    let strNewItem : string = this.GetInputValue();
    let nOrder : number = this.GetOrder();

    if(strNewItem !== ""){

      if(nOrder === this.arrTodoItmes.length -1){
        this.arrTodoItmes[this.arrTodoItmes.length] = strNewItem;
      }
      else{
        this.arrTodoItmes.splice(nOrder, 0, strNewItem);
      }

     this.UpdateView();
     this.$todoInput.value= "";
    }

    else{
      console.error("입력 해라");
    }
  }

  RemoveItem(){
    let nOrder = this.GetOrder();
    if(nOrder >= 0 && nOrder < this.arrTodoItmes.length){
      this.arrTodoItmes.splice(nOrder,1);
    }
    else{
      console.error("유효하지 않은 순서입니다");
    }
  }
}

new CreateHTML();
