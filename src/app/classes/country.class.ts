import { Participation } from "./participation.class";

export class Country{
   
    constructor(public id:number,public name:string,public arrayParticipations:Participation[]) {}
}