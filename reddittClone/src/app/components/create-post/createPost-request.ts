export interface PostRequest {
    name: string,
    title: string,
    text: string,
    creationDate: Date,
    imagePath: string,
    communityID: number,
    userId: number
}