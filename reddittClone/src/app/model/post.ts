import { Community } from "./community";
import { User } from "./user";

export interface Post {
    id: number,
    title: string,
    text: string,
    creationDate: Date,
    imagePath: string,
    community: Community,
    user: User
}