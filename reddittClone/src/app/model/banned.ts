import { Community } from "./community";
import { Moderator } from "./moderator";
import { User } from "./user";

export interface Banned{
    id: number,
    timestamp: Date,
    moderator?: Moderator,
    user?: User,
    community?: Community
}