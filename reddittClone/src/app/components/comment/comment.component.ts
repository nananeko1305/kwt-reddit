import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input("comment")comment!: Comment;
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

  constructor(private router: Router,
    private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe((response: User) => {
      this.user = response
    })
  }

  reportComment(){
    this.router.navigate(['report', 1, this.comment.id])
  }
}
