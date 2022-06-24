import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  public getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:8080/posts/');
  }

  savePost(postRequest: Post) : Observable<any>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Token" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.post<Post>('http://localhost:8080/posts/', postRequest, options);
  }

  public getPostsForCommunity(idCommunity: number): Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:8080/community/' + idCommunity + "/posts");
  }
  
}
