export class MultipleValuesCommunityDTO {
  name?: string
  description?: string
  minPosts? : number
  maxPosts? : number
  minKarma?: number
  maxKarma?: number
  pdfDescription?: string
  rule?: string
  searchAccuracy: string = "OR"
  searchType: string = "FUZZY"
}
