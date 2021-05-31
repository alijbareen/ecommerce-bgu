import {aUser} from "../Logic/aUser"
import Shoppingcart from "../Logic/Shoppingcart";
import ShoppingBasket from "../Logic/Shoppingcart";

class UserController{
  
    users:aUser[];

    register(userName:string,password:string,age:number,gender:string,address:string):boolean {

        //send register data to server 
        //if true return user data and id
        //role : Member
        return true
    }

        
    Login(userName:string,password:string):boolean {
        //send Login to server 
        //if true return user data and id

        //Role : Member

        return true
    }


    Logout():boolean{
        return true
        
    }


    //Buyer Guest and Member
    addProductToCart(userName:string,product:Product,storeName:string):boolean{
        return true
    }

    removeProductFromCart(userName:string,product:string,store:string):boolean{
        return true
    }


    getBasketFromStore(userName:string,store:string):ShoppingBasket{
        return this.users.filter((x)=>x.userName == userName)[0].getMyCart();
    }

    getCart(userName:string):Shoppingcart{
        //change this users to users from server db
       return this.users.filter((x)=>x.userName == userName)[0].getMyCart();    
    }
    leaveFeedback(userName:string, product:string):boolean{
        //add feedback to product list and check if user did purchase the product
        return true;
    }


    //Admin
    establishStore(userName:string, storeName:string):boolean{
        return true;
    }
    closeStore(userName:string, storeName:string):boolean{
        return true;
    }


}
