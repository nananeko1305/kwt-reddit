import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SignInRequestPayload } from 'src/app/components/login/login-request';
import { SignupRequestPayload } from 'src/app/components/register/register-request.payload';
import { User } from 'src/app/model/user';

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
  

}
