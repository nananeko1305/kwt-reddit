import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MultipleValuesCommunityDTO} from "../../model/DTO/MultipleValuesCommunityDTO";
import {MultipleValuesPostDTO} from "../../model/DTO/MultipleValuesPostDTO";

@Injectable({
  providedIn: 'root'
})
export class SearchPostService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public searchPost(multipleValuesPostDTO: MultipleValuesPostDTO): Observable<any>{

    console.log(multipleValuesPostDTO)

    if(multipleValuesPostDTO.commentWordFind != null){
      return this.httpClient.post('http://localhost:8080/posts/findPostsByComment', multipleValuesPostDTO);
    }else if(multipleValuesPostDTO.flair != null){
      return this.httpClient.post('http://localhost:8080/posts/findPostsByFlair', multipleValuesPostDTO);
    }else {
      return this.httpClient.post('http://localhost:8080/posts/findPostsByMultipleValues', multipleValuesPostDTO);
    }
  }
}
