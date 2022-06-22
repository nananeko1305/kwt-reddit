import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { PostService } from 'src/app/service/postService/post.service';
import { PostRequest } from './createPost-request';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  id!: number;
  postRequest: PostRequest;
  postForm!: FormGroup;
  custCommunity: Community = {
    id: 0,
    name: '',
    description: '',
    creationDate: new Date(),
    isSuspended: false,
    suspendedReason: ''
  }

  constructor(private postService: PostService, 
    private router: Router,
    private route: ActivatedRoute) {
      
    this.postRequest = {
      title: '',
      text: '',
      community: this.custCommunity
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
