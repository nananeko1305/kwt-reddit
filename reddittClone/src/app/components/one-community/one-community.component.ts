import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Post } from 'src/app/model/post';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { PostService } from 'src/app/service/postService/post.service';
import { TokenService } from 'src/app/service/tokenService/token.service';

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


  constructor(private router: Router,
    private route: ActivatedRoute,
    private communityService: CommunityService,
    private postService: PostService,
    private tokenService: TokenService) { 
      this.token = tokenService.getToken();
    }

  ngOnInit(): void {
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

}
