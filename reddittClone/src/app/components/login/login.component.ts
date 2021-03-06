import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { SignInRequestPayload } from './login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInRequest: SignInRequestPayload;
  loginForm!: FormGroup;
  isExist : boolean = false;

  constructor(private userService: UserServiceService, private router: Router) {
    this.signInRequest = {
      username:'',
      password:'',
    }
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('', Validators.minLength(2)),
      password : new FormControl(),
  });
  }

  onSubmit():void {
    
  }

  signin(){
    this.signInRequest.username = this.loginForm.get('username')?.value;
    this.signInRequest.password = this.loginForm.get('password')?.value;

    this.userService.signIn(this.signInRequest).subscribe(data => {
      this.isExist = false;
      localStorage.setItem("token", data);
      this.router.navigate(['/']);
    }, error => {
      if(error['status'] == 403){
        this.isExist = true;
      }
    });
  }


}
