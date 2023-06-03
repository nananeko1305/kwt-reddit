import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public getOnePost(postId: number): Observable<Post>{
    return this.httpClient.get<Post>('http://localhost:8080/posts/' + postId);
  }

  savePost(postRequest: FormData) : Observable<any>{
    let headers = new HttpHeaders({
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

  getAllPostsSorted(sortType: string): Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:8080/posts/sort/' + sortType);
  }

  getAllPostsSortedForCommunity(sortType: string, communityId: number): Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:8080/community/' + communityId + '/posts/sort/' + sortType);
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
