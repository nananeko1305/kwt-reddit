import { Flair } from "./flair";
import { Rule } from "./rule";

export interface Community{
    id : number,
    name : string,
    description : string,
    creationDate : Date,
    isSuspended : boolean,
    suspendedReason : string,
    flairs?: Flair[],
    rules?: Rule[]
}