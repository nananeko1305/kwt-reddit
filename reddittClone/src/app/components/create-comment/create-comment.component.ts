import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { Reaction } from 'src/app/model/reaction';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/commentService/comment.service';
import { ReactionService } from 'src/app/service/reactionService/reaction.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  @Input("post") post!: Post;
  commentForm!: FormGroup;
  token!: String | null;
  @Output() addComment = new EventEmitter<Comment>();

  comment: Comment = {
    id: 0,
    text: '',
    timestamp: new Date,
    isDeleted: false,
  };

  reaction: Reaction = {
    id: 0,
    reactionType: 'UPVOTE',
    timestamp: new Date,
    comment: this.comment,
  }

  constructor(
    private commentService: CommentService,
    private userService: UserServiceService,
    private reactionService: ReactionService
  ) { }

  ngOnInit(): void {

    this.token = localStorage.getItem("token")

    this.commentForm = new FormGroup({
      commentText: new FormControl('', Validators.required)
    });
  }

  createComment() {
    if (this.commentForm.get('commentText')?.value != '') {
      this.comment.text = this.commentForm.get('commentText')?.value;
      this.comment.post = this.post
      this.commentService.saveComment(this.comment).subscribe((responseC: Comment) => {
      this.reaction.comment = responseC
      this.reactionService.saveReaction(this.reaction).subscribe((response: Reaction) => {
      this.addComment.emit(responseC);
        })
      })
    }

  }

}
