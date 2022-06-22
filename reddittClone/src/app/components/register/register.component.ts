import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { SignupRequestPayload } from './register-request.payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupRequest: SignupRequestPayload;
  signupForm!: FormGroup;
  isExist: boolean = false;

  constructor(private userService: UserServiceService, private router: Router) {
    this.signupRequest = {
      username:'',
      password:'',
      email:'',
      avatar:'',
      description:'',
      displayName:'',
    }
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      displayName: new FormControl('',Validators.required),
      avatar: new FormControl('',Validators.required),
      description: new FormControl('', Validators.required), 
    });
  }

  signUp(){
    this.signupRequest.username = this.signupForm.get('username')?.value;
    this.signupRequest.email = this.signupForm.get('email')?.value;
    this.signupRequest.password = this.signupForm.get('password')?.value;
    this.signupRequest.displayName = this.signupForm.get('displayName')?.value;
    this.signupRequest.avatar = this.signupForm.get('avatar')?.value;
    this.signupRequest.description = this.signupForm.get('description')?.value;

    this.userService.signUp(this.signupRequest).subscribe(
      data => {
        console.log(data)
        this.router.navigate(["/login"]);
      }, 
      
      error => {
      if(error['status'] == 500){
        this.isExist = true;
        console.log(this.isExist);
      }
    });
  }

 

}
