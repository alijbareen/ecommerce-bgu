import Shoppingcart from "../Cart/Shoppingcart"

export abstract class aUser{
    userName:string ;
    myCart :Shoppingcart; //Shoppingcart
    reciepts : [];
    alarms:[];
    age:number;
    gender:string;
    address:string;
    role:string;

    constructor(userName:string){
        this.userName=userName;
    }

    getMyCart(): Shoppingcart{
        if (this.myCart == null)
        this.myCart = new Shoppingcart();
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

    constructor(userName: string) { 
        super(userName); // must call super()
    }
}

export class Member extends aUser { 
    constructor(userName: string) { 
        super(userName); // must call super()
    }
}

export class Admin extends aUser { 
    constructor(userName: string) { 
        super(userName); // must call super()
    }
}

