import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banned } from 'src/app/model/banned';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  constructor(private httpClient: HttpClient) { }

  save(banned: Banned): Observable<Banned>{
    return this.httpClient.post<Banned>("http://localhost:8080/banneds", banned)
  }

  unban(banned: Banned): Observable<Banned>{
    return this.httpClient.delete<Banned>("http://localhost:8080/banneds/" + banned.id)
  }
}
