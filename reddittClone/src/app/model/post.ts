import { Community } from "./community";
import { Flair } from "./flair";
import { Reaction } from "./reaction";
import { Report } from "./report";
import { User } from "./user";

export interface Post {
    id: number,
    title: string,
    text: string,
    creationDate: Date,
    imagePath: string,
    community: Community,
    user: User,
    flair: Flair,
    reports: [],
    reactions: []
}