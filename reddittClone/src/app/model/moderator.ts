import { Community } from "./community";
import { User } from "./user";

export interface Moderator{
    id: number,
    user?: User,
    community?: Community,
    isDeleted: boolean
}