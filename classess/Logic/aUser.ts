import Shoppingcart from "./Shoppingcart"

export abstract class aUser{
    id:number
    userName:string ;
    password:string ;
    myCart :any; //Shoppingcart
    role:string;
    age:number;
    gender:string;
    address:string;

    purchaseHistory:[];
    alarms:[];

    constructor(userName:string,password:string,age:number,gender:string,address:string){
        this.userName=userName;
        this.password=password;
        this.age=age;
        this.gender=gender;
        this.address=address;
        this.myCart= new Shoppingcart();
        this.purchaseHistory = [];
        this.alarms= [];
    }

    getMyCart(): Shoppingcart{
        return this.myCart;
    }

    getUserName(): string{
        return this.userName;
    }
    getUserAge(): number{
        return this.age;
    }
    getUserAddress(): string{
        return this.address;
    }
     getGender(): string{
        return this.gender;
    }
}

export class Guest extends aUser { 

    constructor(userName:string,password:string,age:number,gender:string,address:string){
        super(userName,password,age,gender,address); // must call super()
        this.role="Guest";
    }
}

export class Member extends aUser { 
    constructor(userName:string,password:string,age:number,gender:string,address:string){
        super(userName,password,age,gender,address); // must call super()
        this.role="Member";
    }
}

export class Admin extends aUser { 
    constructor(userName:string,password:string,age:number,gender:string,address:string){
        super(userName,password,age,gender,address); // must call super()
        this.role="Admin";
    }
   
}

