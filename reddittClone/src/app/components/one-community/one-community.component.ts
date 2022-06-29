import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Moderator } from 'src/app/model/moderator';
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
  community: Community = {
    id: 0,
    name: '',
    description: '',
    creationDate: new Date,
    isSuspended: false,
    suspendedReason: '',
    moderators: new Array<Moderator>()
  };
  posts!: Post[];
  token!: string | null;
  user: User = {
    id: 0,
    username: '',
    role: '',
    password: '',
    email: '',
    avatar: '',
    registrationDate: new Date,
    description: '',
    displayName: ''
  };
  isModerator: boolean = false;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private communityService: CommunityService,
    private postService: PostService,
    private tokenService: TokenService,
    private userService: UserServiceService) {
    this.token = tokenService.getToken();
  }

  ngOnInit(): void {

    this.userService.returnUser().subscribe((response: User) => {
      this.user = response
    })

    this.route.params.subscribe((params: Params) => { this.id = +params["id"] })

    this.communityService.getOneCommunity(this.id).subscribe((response: Community) => {
      this.community = response;
      console.log(JSON.stringify(this.community.moderators))
      for (let moderator of this.community.moderators) {
        if (moderator.userID == this.user.id && moderator.communityID == this.community.id) {
          this.isModerator = true;
          console.log(this.isModerator)
        }
      }
    });

    this.postService.getPostsForCommunity(this.id).subscribe((response: Post[]) => {
      this.posts = response;
    });


  }



  createPost(id: number) {
    this.router.navigate(["createPost", id]);
  }

  suspendCommunity(id: number) {
    this.router.navigate(["suspendCommunity", id]);
  }

  sortTop() {
    this.postService.getAllPostsSortedForCommunity("Top", this.id).subscribe((response: Post[]) => {
      this.posts = response
    })
  }

  sortHot() {
    this.postService.getAllPostsSortedForCommunity("Hot", this.id).subscribe((response: Post[]) => {
      this.posts = response
    })
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter(function (p) {
      return p.id != post.id;
    })
    console.log(JSON.stringify(this.posts))
  }
}


