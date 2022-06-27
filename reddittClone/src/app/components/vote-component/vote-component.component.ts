import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { Reaction } from 'src/app/model/reaction';
import { CommentService } from 'src/app/service/commentService/comment.service';
import { PostService } from 'src/app/service/postService/post.service';
import { ReactionService } from 'src/app/service/reactionService/reaction.service';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.css']
})
export class VoteComponentComponent implements OnInit {

  @Input("comment") comment!: Comment;
  karma!: number;

  constructor(private reactionSerivce: ReactionService,
    private commentService : CommentService,
    private postService: PostService,
    ) { }

  ngOnInit(): void {
  this.commentService.getReactionsForComment(this.comment.id).subscribe((response: Reaction[]) => {
    this.karma = this.postService.countKarma(response)
  })

  }

  Vote(reactionType: string) {

    const reaction: Reaction = {
      id: 0,
      reactionType: reactionType,
      timestamp: new Date,
      comment: this.comment,
    }

    this.commentService.vote(reaction).subscribe((response: Reaction) => {
      this.commentService.getReactionsForComment(this.comment.id).subscribe((response: Reaction[]) => {
        this.karma = this.postService.countKarma(response)
      })
    })

  }

}
