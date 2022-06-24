import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenService } from 'src/app/service/tokenService/token.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tokenService!: TokenService;

  constructor(private ts: TokenService, private router : Router) {
    this.tokenService = ts;
  }


  ngOnInit(): void {

  }

  logout(): void{
    this.tokenService.logout();
    this.router.navigate(["login"]);
  }

  profile(){
    this.router.navigate(["info"]);
  }
}
