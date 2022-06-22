import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  @Input("onePost") post! : Post;
  @Input("communityName") communityName!: string;
  user! : User;

  ngOnInit(): void {
  }

}
