import { aUser, Member } from "./aUser";

export default class Store{
    id:number;
    name:string;
    owners: Member[];
    managers:Member[];
    founder:Member[];
    receipts : any[];
    inventory : Product[]

}