import { Comment } from "./comment";
import { Post } from "./post";
import { User } from "./user";

export interface Reaction{
    id: number,
    reactionType: string,
    timestamp: Date,
    user?: User,
    comment?: Comment,
    post?: Post
}