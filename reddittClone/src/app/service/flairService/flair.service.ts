import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flair } from 'src/app/model/flair';

@Injectable({
  providedIn: 'root'
})
export class FlairService {

  constructor(private httpClient: HttpClient) { }

  getOneFlair(flairID: number): Observable<Flair>{
    return this.httpClient.get<Flair>('http://localhost:8080/flairs/' + flairID)
  }

  getFlairsForCommunity(communityId: number): Observable<Flair[]>{
    return this.httpClient.get<Flair[]>('http://localhost:8080/community/' + communityId + "/flairs")
  }

  addFlair(communityId: number, flair: Flair): Observable<Flair>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.post<Flair>('http://localhost:8080/community/' + communityId + "/flairs", flair, options);
  }

  deleteFlair(communityId: number, flair: Flair): Observable<Flair>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.delete<Flair>('http://localhost:8080/community/' + communityId + "/flairs/" + flair.id, options);
  }

}
