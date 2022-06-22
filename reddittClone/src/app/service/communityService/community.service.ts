import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Community } from 'src/app/model/community';
import { CommunityRequest } from 'src/app/components/create-community/create-community-post';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private httpClient: HttpClient) { }

  public getAllCommunities(): Observable<Community[]>{
    return this.httpClient.get<Community[]>('http://localhost:8080/community/');
  }

  public getOneCommunity(id: number): Observable<Community>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Token" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}
    return this.httpClient.get<Community>('http://localhost:8080/community/' + id, options);
  }

  saveCommunity(communityRequest: CommunityRequest) : Observable<any>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Token" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}
    return this.httpClient.post<Community>('http://localhost:8080/community/', communityRequest, options);
  }
}
