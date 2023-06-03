export class MultipleValuesPostDTO {
  title?: string
  text?: string
  minComments? : number
  maxComments? : number
  minKarma?: number
  maxKarma?: number
  pdfDescription?: string
  commentWordFind?: string
  flair?: string
  searchAccuracy: string = "OR"
  searchType: string = "FUZZY"
}
