import { Banned } from "./banned";
import { Post } from "./post";
import { Report } from "./report";

export interface User{
    id : number,
    username : string,
    role: string,
    password: string,
    email : string,
    avatar: string,
    registrationDate : Date,
    description: string,
    displayName: string
}