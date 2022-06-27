import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { PostService } from 'src/app/service/postService/post.service';
import { TokenService } from 'src/app/service/tokenService/token.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-one-community',
  templateUrl: './one-community.component.html',
  styleUrls: ['./one-community.component.css']
})
export class OneCommunityComponent implements OnInit {

  id!: number;
  community!: Community;
  posts!: Post[];
  token!: string | null;
  user!: User;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private communityService: CommunityService,
    private postService: PostService,
    private tokenService: TokenService,
    private userService: UserServiceService) { 
      this.token = tokenService.getToken();
    }

  ngOnInit(): void {
    this.userService.returnUser().subscribe((response: User)=>{
      this.user = response
      console.log(JSON.stringify(response))
    })
    this.route.params.subscribe((params: Params) => { this.id = +params["id"] }),
      console.log(this.id);
    this.communityService.getOneCommunity(this.id).subscribe((response : Community) => {
      this.community = response;
      console.log(response);
    });
    this.postService.getPostsForCommunity(this.id).subscribe((response : Post[]) => {
      this.posts = response;
      console.log(response);
    });
  }

  createPost(id: number){
    this.router.navigate(["createPost", id]);
  }

  suspendCommunity(id: number){
    this.router.navigate(["suspendCommunity", id]);
  }

}
