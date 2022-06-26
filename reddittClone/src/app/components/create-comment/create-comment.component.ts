import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  @Input("post") post!: Post;
  commentForm!: FormGroup;
  comment!: Comment;

  constructor() { }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      commentText: new FormControl('', Validators.required)
    });
  }

  createComment(){
    this.comment.text = this.commentForm.get('commentText')?.value;
    this.comment.post = this.post
  }

}
