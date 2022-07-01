import { Community } from "./community";
import { User } from "./user";

export interface Moderator{
    id: number,
    user?: User,
    community?: Community,
    deleted: boolean
}