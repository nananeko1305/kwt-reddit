import { Post } from "./post";
import { Reaction } from "./reaction";
import { Report } from "./report";
import { User } from "./user";

export interface Comment{
    id: number,
    text: string,
    timestamp: Date,
    isDeleted: boolean,
    post: Post,
    user: User,
    reactions: Array<Reaction>,
    reports: Array<Report>
}