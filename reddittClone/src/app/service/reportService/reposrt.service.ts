import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from 'src/app/model/report';

@Injectable({
  providedIn: 'root'
})
export class ReposrtService {

  constructor(private httpClient: HttpClient) { }

  saveReport(report: Report): Observable<Report>{
    let headers = new HttpHeaders({
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token"),
    });
  
    let options = {headers:headers};
    return this.httpClient.post<Report>('http://localhost:8080/reports', report, options);
  }

  getReportsForCommunity(communityID: number, reportType: number): Observable<Report[]>{
    return this.httpClient.get<Report[]>('http://localhost:8080/community/' + communityID + '/reports/' + reportType);
  }
}
