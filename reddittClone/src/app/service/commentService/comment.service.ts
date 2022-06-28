import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/comment';
import { Reaction } from 'src/app/model/reaction';
import { SortType } from 'src/app/model/sortType';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  findOneComment(commentId: number): Observable<Comment>{
    return this.httpClient.get<Comment>("http://localhost:8080/comments/" + commentId);
  }

  saveComment(comment: Comment): Observable<Comment>{
    console.log(JSON.stringify(comment));

    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}
    return this.httpClient.post<Comment>("http://localhost:8080/comments", comment, options);
  }

  findCommentsForPost(postId: number): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>("http://localhost:8080/posts/" + postId + "/comments/");
  }

  getSortedComments(sortType: SortType): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>("http://localhost:8080/posts/" + sortType.postId + "/comments/sort/" + sortType.sortType);
  }

  getReactionsForComment(commentId: number): Observable<Reaction[]>{
    return this.httpClient.get<Reaction[]>("http://localhost:8080/comments/" + commentId + "/reactions/");
  }

  vote(reaction: Reaction): Observable<Reaction>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers}

    return this.httpClient.post<Reaction>("http://localhost:8080/comments/" + reaction.comment?.id + "/reactions/", reaction, options);
  }
}
