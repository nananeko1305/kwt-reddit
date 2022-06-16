import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { PostService } from 'src/app/service/postService/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  communities! : Community[];
  posts! : Post[];

  constructor(
    private communityService : CommunityService,
    private postService : PostService ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
        console.log(response);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


}
