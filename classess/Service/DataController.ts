import {Admin,aUser, Member} from "../Logic/aUser"

import Store from "../Logic/Store";

class DataController{

    users:aUser[];
    stores:Store[];

/*
        let user1:Admin= new Admin("ali","a",1,"1","11");
        this.users.push(user1);
        console.log(this.users);
*/

      registerUser(userName:string,password:string,age:number,gender:string,address:string):boolean {
        //send register data to server 
        //if true return user data and id
        //role : Member

        let user = new Member(userName,password,age,gender,address);
        user.role= "Member";
        this.users.push(user);
        return true

    }

        
    Login(userName:string,password:string):boolean {
        //send Login to server 
        //if true return user data and id
       let user1=  this.users.filter( (x)=>{ x.userName === userName})[0]
       if(user1.password === password){ 
           user1.isLogged= true;
            //Role : Member
            user1.role = "Member";
            return true
        }else{
           return false
       }

    }


    Logout(userName:string):boolean{

        this.users.filter( (x)=>{ x.userName === userName})[0].isLogged=false;
        return true  ;

    }


    //Buyer Guest and Member
    addProductToCart(userName:string,product:Product,storeName:string):boolean{
        //check user role
        let user = this.users.filter( (x)=>{ x.userName === userName})[0];
        user.myCart.addProduct(product,storeName)
    

        return true
    }

    removeProductFromCart(userName:string,product:Product,store:string):boolean{

        let user = this.users.filter( (x)=>{ x.userName === userName})[0];
        return user.myCart.removeProduct(product,store);

    }


    // getBasketFromStore(userName:string,store:string):ShoppingBasket{

    //     return this.users.filter((x)=>x.userName == userName)[0].getMyCart();
    // }

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

        //check roles
        let store = new Store(storeName,this.users.filter((x)=>x.userName == userName)[0]);
        this.stores.push(store);

        return true;

    }


    closeStore(userName:string, storeName:string):boolean{

        let store = new Store(storeName,this.users.filter((x)=>x.userName == userName)[0]);
        
        let index = this.stores.indexOf(store);
        if (index > -1) {
            this.stores.splice(index, 1);
          }
        return true;
    }


}

