import { Flair } from "./flair";
import { Moderator } from "./moderator";
import { Rule } from "./rule";

export interface Community{
    id : number,
    name : string,
    description : string,
    creationDate : Date,
    isSuspended : boolean,
    suspendedReason : string,
    flairs?: Flair[],
    rules?: Rule[],
    moderators: Moderator[]
}