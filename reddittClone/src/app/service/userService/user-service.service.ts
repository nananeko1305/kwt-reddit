import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SignInRequestPayload } from 'src/app/components/login/login-request';
import { SignupRequestPayload } from 'src/app/components/register/register-request.payload';
import { User } from 'src/app/model/user';
import { Password } from 'src/app/model/password';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }


  getOneUser(id: number): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8080/users/' + id);
  }

  signUp(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/users/', signupRequestPayload, { responseType: 'text' });
  }

  signIn(signInRequest: SignInRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/users/login', signInRequest, { responseType: 'text' });
  }

  changeUser(user: User): Observable<any>{
    return this.httpClient.put('http://localhost:8080/users/' + user.id, user, { responseType: 'text' });
  }

  changePassword(passwordChange: Password): Observable<any>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
    let options = {headers:headers};
    return this.httpClient.put('http://localhost:8080/users/'+ passwordChange.userId + '/passwordChange', passwordChange, options);
  }

  returnUser(): Observable<User> {
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
    let options = {headers:headers};
    return this.httpClient.get<User>('http://localhost:8080/users/1', options);
  }

  returnKarma(userId: number){
    return this.httpClient.get<number>('http://localhost:8080/users/' + userId + '/karma');
  }
  

}
