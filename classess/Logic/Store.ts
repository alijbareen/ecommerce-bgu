import { aUser, Member } from "./aUser";

export default class Store{
    
    name:string
    owners: Member[];
    managers:Member[];
    founder:Member[];
    receipts : any[];
    inventory : Product[]

}