import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Banned } from 'src/app/model/banned';
import { Community } from 'src/app/model/community';
import { Flair } from 'src/app/model/flair';
import { Moderator } from 'src/app/model/moderator';
import { Post } from 'src/app/model/post';
import { Report } from 'src/app/model/report';
import { Rule } from 'src/app/model/rule';
import { User } from 'src/app/model/user';
import { PostService } from 'src/app/service/postService/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  id!: number;
  postRequest: Post;
  postForm!: FormGroup;
  custCommunity: Community = {
    id: 0,
    name: '',
    description: '',
    creationDate: new Date(),
    isSuspended: false,
    suspendedReason: '',
    moderators: [],
    banneds: [],
    rules: [],
    flairs: []
  }
  user: User = {
    id : 0,
    username : '',
    role: 'USER',
    password: '',
    email : '',
    avatar: '',
    registrationDate : new Date,
    description: '',
    displayName: '',
    posts: [],
    comments: [],
    reporst: [],
    banneds: []
  }
  flair: Flair = {
    id: 0,
    name: '',
    posts: [],
    communities: []
  }

  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) {

    this.postRequest = {
      id: 0,
      title: '',
      text: '',
      creationDate: new Date,
      imagePath: '',
      community: this.custCommunity,
      user: this.user,
      flair: this.flair,
      reports: [],
      reactions: []
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.id = +params["id"] }),
      this.postForm = new FormGroup({
        text: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
      });
  }

  post() {
    this.postRequest.text = this.postForm.get('text')?.value;
    this.postRequest.title = this.postForm.get('title')?.value;
    this.postRequest.community.id = this.id
    this.postService.savePost(this.postRequest).subscribe(
      data => {
        console.log(data),
          this.router.navigate(["oneCommunity/", this.id]);
      },
      error => {
        console.log(error)
      })
  }
}
