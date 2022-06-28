import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rule } from 'src/app/model/rule';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(private httpClient: HttpClient) { }

  getAllRulesForCommunity(communityId: number): Observable<Rule[]>{
    return this.httpClient.get<Rule[]>('http://localhost:8080/community/' + communityId + '/rules');
  }

  addRule(communityId: number, rule: Rule): Observable<Rule>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.post<Rule>('http://localhost:8080/community/' + communityId + "/rules", rule, options);
  }

  deleteRule(communityId: number, rule: Rule): Observable<Rule>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.delete<Rule>('http://localhost:8080/community/' + communityId + "/rules/" + rule.id, options);
  }
}
