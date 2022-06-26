import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { Reaction } from 'src/app/model/reaction';
import { PostService } from 'src/app/service/postService/post.service';
import { ReactionService } from 'src/app/service/reactionService/reaction.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {


  @Input("post") post!: Post;
  karma!: number;

  constructor(
    private postService: PostService,
    private reactionService: ReactionService) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.post))
    this.postService.getReactionsForPost(this.post.id).subscribe((response: Reaction[]) => {
      console.log(JSON.stringify(response))
      this.karma = this.postService.countKarma(response);
    });
  }

  Vote(reactionType: string){

    const reaction: Reaction = {
      id: 0,
      reactionType : reactionType,
      timestamp : new Date,
      post : this.post,
    }

    this.reactionService.vote(reaction, this.post.id).subscribe((response: Reaction) => {
      console.log(JSON.stringify(response))
      this.postService.getReactionsForPost(this.post.id).subscribe((response: Reaction[]) => {
        console.log(JSON.stringify(response))
        this.karma = this.postService.countKarma(response);
      });
    });
  }
}
