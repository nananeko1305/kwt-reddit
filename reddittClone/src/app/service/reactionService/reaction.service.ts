import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reaction } from 'src/app/model/reaction';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private httpClient: HttpClient) { }

  saveReaction(reaction: Reaction): Observable<Reaction>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
    let options = {headers:headers};
    return this.httpClient.post<Reaction>('http://localhost:8080/reactions/', reaction, options)
  }

  public vote(reaction: Reaction, postID: number): Observable<Reaction>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
    let options = {headers:headers};
    return this.httpClient.post<Reaction>('http://localhost:8080/posts/' + postID + "/reactions", reaction, options)
  }

}
