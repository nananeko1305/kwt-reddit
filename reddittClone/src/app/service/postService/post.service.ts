import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';
import { Reaction } from 'src/app/model/reaction';

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
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.post<Post>('http://localhost:8080/posts/', postRequest, options);
  }

  public getPostsForCommunity(idCommunity: number): Observable<any>{
    return this.httpClient.get<Post[]>('http://localhost:8080/community/' + idCommunity + "/posts");
  }

  public getReactionsForPost(idPost: number): Observable<any>{
    return this.httpClient.get<Reaction[]>('http://localhost:8080/posts/' + idPost + '/reactions');
  }

  public deletePost(idPost: number): Observable<Post>{
    return this.httpClient.delete<Post>('http://localhost:8080/posts/' + idPost);
  }
  
  public countKarma(reactions: Reaction[]): number{

    let karma: number = 0;
    reactions.forEach(element => {
      if(element.reactionType == "UPVOTE"){
        karma++;
      }else{
        karma--;
      }
    });
    return karma;
  }
}
