import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input("comment")comment!: Comment;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reportComment(){
    this.router.navigate(['report', 1, this.comment.id])
  }
}
