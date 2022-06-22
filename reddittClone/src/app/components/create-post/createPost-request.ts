import { Community } from "src/app/model/community";

export interface PostRequest {
    title: string,
    text: string,
    community: Community
}