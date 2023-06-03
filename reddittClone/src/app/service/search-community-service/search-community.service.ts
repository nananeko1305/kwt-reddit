import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MultipleValuesCommunityDTO} from "../../model/DTO/MultipleValuesCommunityDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchCommunityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public searchCommunity(multipleValuesCommunityDTO: MultipleValuesCommunityDTO): Observable<any>{

    console.log(multipleValuesCommunityDTO.rule)

    if(multipleValuesCommunityDTO.rule){
      console.log("Rule")
      multipleValuesCommunityDTO.searchAccuracy = ''
      return this.httpClient.post('http://localhost:8080/community/findCommunitiesByRule', multipleValuesCommunityDTO);
    }else {
      console.log("Nije Rule")
      multipleValuesCommunityDTO.rule = ''
      return this.httpClient.post('http://localhost:8080/community/findCommunitiesByMultipleValues', multipleValuesCommunityDTO);
    }
  }
}
