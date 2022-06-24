import { HttpClient } from '@angular/common/http';
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
}
