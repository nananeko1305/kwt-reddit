import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { TokenService } from 'src/app/service/tokenService/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  token!: string | null;
  user!: User;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
    if(this.token != null){
      
    }
  }

}
