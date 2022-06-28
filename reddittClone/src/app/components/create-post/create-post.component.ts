import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Banned } from 'src/app/model/banned';
import { Comment } from 'src/app/model/comment';
import { Community } from 'src/app/model/community';
import { Flair } from 'src/app/model/flair';
import { Moderator } from 'src/app/model/moderator';
import { Post } from 'src/app/model/post';
import { Reaction } from 'src/app/model/reaction';
import { Report } from 'src/app/model/report';
import { Rule } from 'src/app/model/rule';
import { User } from 'src/app/model/user';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { FlairService } from 'src/app/service/flairService/flair.service';
import { PostService } from 'src/app/service/postService/post.service';
import { ReactionService } from 'src/app/service/reactionService/reaction.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  id!: number;
  postForm!: FormGroup;
  flairs!: Flair[];
  selectedOption: Flair = {
    id: 0,
    name: '',
    deleted: false
  };
  @ViewChild('selectFlair') selectFlair! : ElementRef;
  selectedFile = null;

  

  constructor(
    private postService: PostService,
    private reactionService: ReactionService,
    private communityService: CommunityService,
    private router: Router,
    private route: ActivatedRoute,
    private flairService: FlairService) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.id = +params["id"] }),
      this.postForm = new FormGroup({
        text: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
      });
    this.communityService.getFlairsForCommunity(this.id).subscribe((response: Flair[]) => {
      this.flairs = response
      console.log(JSON.stringify(response))
    })
  }

  onFileChanged(event:any){
    console.log(event)
    this.selectedFile = event.target.files[0];
  }

  selectEventHandler(event:any){
    console.log(this.selectFlair.nativeElement.value)
    this.flairService.getOneFlair(this.selectFlair.nativeElement.value).subscribe((response: Flair)=>{
        console.log(response)
        this.selectedOption = response
    })
  }

  postF() {

    const custCommunity: Community = {
      id: this.id,
      name: '',
      description: '',
      creationDate: new Date(),
      isSuspended: false,
      suspendedReason: '',
      moderators: []
    }
    const user: User = {
      id: 0,
      username: '',
      role: 'USER',
      password: '',
      email: '',
      avatar: '',
      registrationDate: new Date,
      description: '',
      displayName: ''
    }
    const flair: Flair = {
      id: 0,
      name: '',
      deleted: false
    }
    const post: Post = {
      id: 0,
      title: '',
      text: '',
      creationDate: new Date,
      imagePath: '',
      community: custCommunity,
      user: user,
      flair: flair,
      isDeleted: false
    }
    const comment: Comment = {
      id: 0,
      text: '',
      timestamp: new Date,
      isDeleted: false,
      post: post,
      user: user
    }
    const reaction: Reaction = {
      id: 0,
      reactionType: '',
      timestamp: new Date,
      user: user,
      comment: comment,
      post: post
    }


    post.text = this.postForm.get('text')?.value;
    post.title = this.postForm.get('title')?.value;
    post.flair = this.selectedOption;

    this.postService.savePost(post).subscribe(
      response => {
        console.log(response)
        reaction.reactionType = 'UPVOTE';
        reaction.timestamp = new Date;
        reaction.post!.id = response.id;
        this.reactionService.saveReaction(reaction).subscribe(
          resp => {
            console.log(resp)
            this.router.navigate(["oneCommunity/" + custCommunity.id]);
          });
      });
  }
}
