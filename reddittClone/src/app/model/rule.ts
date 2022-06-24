import { Community } from "./community";

export interface Rule{
    id: number,
    description: string,
    community: Community
}