import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenService } from 'src/app/service/tokenService/token.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  token!: string | null;
  user : User = {
    id : 0,
    username : '',
    role: '',
    password: '',
    email : '',
    avatar: '',
    registrationDate : new Date,
    description: '',
    displayName: '' 
  };
  changeInfoForm!: FormGroup;
  karma! : number;
  successfully : boolean = false;

  constructor(
    private tokenService: TokenService,
    private userService: UserServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.userService.returnUser().subscribe((response: User) => {
      this.user = response;
      console.log(JSON.stringify(response))

      this.userService.returnKarma(this.user.id).subscribe((response: number) => {
        this.karma = response
      });

      this.changeInfoForm = new FormGroup({
        displayName: new FormControl(this.user.displayName, Validators.required),
        description: new FormControl(this.user.description, Validators.required)
      });
    });
  }

  changeInfo() {
    this.user.displayName = this.changeInfoForm.get("displayName")?.value;
    console.log(this.user.displayName)
    this.user.description = this.changeInfoForm.get("description")?.value;
    console.log(this.user.description)
    this.userService.changeUser(this.user).subscribe((response: HttpStatusCode) => {
      if(HttpStatusCode.Ok){
        this.successfully = true
      }
    })
  }

  passwordChange(userID: number){
    this.router.navigate(['passwordChange',userID])
  }
}
