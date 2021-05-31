import { aUser, Member } from "./aUser";

export default class Store{
    id:number;
    name:string;
    owners: Member[];
    managers:Member[];
    founder:Member[];
    receipts : any[];
    inventory : Product[]


    constructor(name:string,founder:Member){

        this.name=name;
        this.founder= [founder];
        this.owners=[founder];

        this.inventory = [];
        this.receipts = [];
        this.managers = [];
    }

}