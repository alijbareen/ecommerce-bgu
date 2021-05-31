
class Shoppingcart{

     cart: ShoppingBasket[];

     constructor(){
         this.cart = [];
     }

     addProduct(product :Product,store:string):boolean{
        let basket:ShoppingBasket =  this.cart.filter((X)=>{X.storeName === store})[0];
        basket.basket.push(product);
        return true;
     }
     removeProduct(product :Product,store:string):boolean{
        let basket:ShoppingBasket =  this.cart.filter((X)=>{X.storeName === store})[0];
        let index = basket.basket.indexOf(product);
        if (index > -1) {
            basket.basket.splice(index, 1);
          }
        return true;
     }
    
}

class ShoppingBasket{


    storeName:string
    basket:Product[]
    constructor(){
        this.basket=[];
    }
}