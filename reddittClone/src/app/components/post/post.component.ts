import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moderator } from 'src/app/model/moderator';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { PostService } from 'src/app/service/postService/post.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private postService: PostService,
    private router: Router) { }

  @Input("onePost") post! : Post;
  @Input("communityName") communityName!: string;
  user! : User;
  moderator!: Moderator;

  ngOnInit(): void {
    console.log(JSON.stringify(this.user))
  }

  openOneCommunity(id: number){
    this.router.navigate(["/oneCommunity",id])
  }

  deletePost(id: number){
    this.postService.deletePost(id)
  }

}
