import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input("comment")comment!: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
