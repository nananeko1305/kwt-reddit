import { HttpStatusCode } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from 'src/app/model/password';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  user!: User;
  urlIDParam!: string | null;
  changePasswordForm!: FormGroup;
  id!: number;
  error: boolean = false; 
  passwordError: boolean = false;
  password: Password = {
    userId: 0,
    oldPassword: '',
    newPassword: ''
  } 
  httpStatus!: HttpStatusCode;

  constructor(private route: ActivatedRoute,
    private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
           
    })

    this.urlIDParam = this.route.snapshot.paramMap.get('id');
    if(this.urlIDParam != null){
      this.id = +this.urlIDParam;
      this.userService.getOneUser(this.id).subscribe((response: User) => {
        this.user = response;
      },
      error => {
        this.router.navigate(["error"])
      })
    }
  }

  changePasswordF(){
    this.password.userId = this.user.id;
    this.password.oldPassword = this.changePasswordForm.get("oldPassword")?.value;
    this.password.newPassword = this.changePasswordForm.get("newPassword")?.value;
    this.userService.changePassword(this.password).subscribe((response: Password) => {
      console.log(response)
      this.router.navigate(["info"]);
    },
    (status: HttpStatusCode) => {
      if(HttpStatusCode.NotFound){
        this.passwordError = true
      }
    })

  }
}
