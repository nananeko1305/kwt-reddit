import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moderator } from 'src/app/model/moderator';
import { UserServiceService } from '../userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  moderator!: Moderator;

  constructor(
    private userService: UserServiceService,
    private httpClient: HttpClient) { }

    public getModerator(idModerator: number): Observable<Moderator>{
      return this.httpClient.get<Moderator>('http://localhost:8080/moderator/' + idModerator);
    }

    findAll(): Observable<Moderator[]>{
      let headers = new HttpHeaders({
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("token"),
      });
      let options = {headers:headers};
      return this.httpClient.get<Moderator[]>('http://localhost:8080/moderators', options);
    }

    save(moderator: Moderator): Observable<Moderator>{
      return this.httpClient.post<Moderator>('http://localhost:8080/moderators', moderator);
    }

    delete(moderator: Moderator): Observable<Moderator>{
      return this.httpClient.post<Moderator>('http://localhost:8080/moderators/' + moderator.id, moderator)
    }

    getModeratorByUserId(userId: number, communityId: number): Observable<Moderator>{
      return this.httpClient.get<Moderator>('http://localhost:8080/users/' + userId + '/community/' + communityId)
    }
}
