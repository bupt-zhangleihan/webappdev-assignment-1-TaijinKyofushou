class product{
  constructor(id, name, model, price, quantity, isOnSale, discount){
    this.id = id;
    this.name = name;
    this.model = model;
    this.price = price;
    this.quantity = quantity;
    this.isOnSale = isOnSale; //增加了用布尔值表示的是否打折信息
    this.discount = discount
  }
}
const pencil_product = new product(
  12138, //numbers
  "pencil", //strings
  "HB", //strings
  0.5, //numbers
  3, //numbers
  False, //booleans
  1 //numbers
  )
