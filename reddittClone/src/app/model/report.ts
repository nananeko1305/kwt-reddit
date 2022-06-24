import { Post } from "./post"
import { User } from "./user"

export interface Report{
    id: number,
    reportReason: string
    timestamp: Date,
    accepted: boolean,
    user: User,
    post: Post,
    comment: Comment
}