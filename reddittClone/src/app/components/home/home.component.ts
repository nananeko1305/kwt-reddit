import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { PostService } from 'src/app/service/postService/post.service';
import { TokenService } from 'src/app/service/tokenService/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  communities! : Community[];
  posts! : Post[];
  token!: string | null;

  constructor(
    private communityService : CommunityService,
    private postService : PostService,
    private tokenService: TokenService,
    private router: Router ) { 
      this.token = tokenService.getToken();
    }

  ngOnInit() {
    this.getAllPosts();
    this.getAllCommunities();
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

  getAllCommunities(): void {
    this.communityService.getAllCommunities().subscribe(
      (response: Community[]) => {
        this.communities = response;
        console.log(response);
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  openOneCommunity(id: number){
    this.router.navigate(["/oneCommunity",id])
  }
}
