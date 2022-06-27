import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Community } from 'src/app/model/community';
import { Flair } from 'src/app/model/flair';

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
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}
    return this.httpClient.get<Community>('http://localhost:8080/community/' + id, options);
  }

  saveCommunity(community: Community) : Observable<any>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}
    return this.httpClient.post<Community>('http://localhost:8080/community/', community, options);
  }

  suspendCommunity(community: Community) : Observable<any>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}
    return this.httpClient.post<Community>('http://localhost:8080/community/' + community.id + '/suspend', community, options);
  }

  getFlairsForCommunity(communityId: number): Observable<Flair[]>{
    return this.httpClient.get<Flair[]>('http://localhost:8080/community/' + communityId + '/flairs');
  }
}
