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

  communities!: Community[];
  posts!: Post[];
  token!: string | null;

  constructor(
    private communityService: CommunityService,
    private postService: PostService,
    private tokenService: TokenService,
    private router: Router) {
    this.token = tokenService.getToken();
  }

  ngOnInit() {
    this.getAllCommunities();
    this.getAllPosts();
  }

  getAllCommunities(): void {
    this.communityService.getAllCommunities().subscribe(
      (response: Community[]) => {
        this.communities = response;
        console.log(JSON.stringify(response))
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    // }

  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {
        this.posts = this.randomArrayShuffle(response)
        console.log(JSON.stringify(response))
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openOneCommunity(id: number) {
    this.router.navigate(["/oneCommunity", id])
  }


  randomArrayShuffle(posts: Post[]) {
    var currentIndex = posts.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = posts[currentIndex];
      posts[currentIndex] = posts[randomIndex];
      posts[randomIndex] = temporaryValue;
    }
    return posts;

  }

  sortTop(){
    this.postService.getAllPostsSorted("Top").subscribe((response: Post[]) => {
      this.posts = response
    })
  }

  sortHot(){
    this.postService.getAllPostsSorted("Hot").subscribe((response: Post[]) => {
      this.posts = response
    })
  }


  deletePost(post : Post){
    this.posts = this.posts.filter(function(p) {
      return p.id != post.id;
    })
    console.log(JSON.stringify(this.posts))
  }

}
