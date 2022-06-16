import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Community } from 'src/app/model/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private httpClient: HttpClient) { }

  public getAllCommunities(): Observable<Community[]>{
    return this.httpClient.get<Community[]>('http://localhost:8080/community/findAll');
  }
}
