import { Community } from "./community"
import { Post } from "./post"

export interface Flair {
    id: number,
    name: string
    posts: Array<Post>,
    communities: Array<Community>
}