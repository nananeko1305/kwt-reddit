import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Moderator } from 'src/app/model/moderator';
import { Post } from 'src/app/model/post';
import { SortType } from 'src/app/model/sortType';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/commentService/comment.service';
import { PostService } from 'src/app/service/postService/post.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private postService: PostService,
    private commentService: CommentService,
    private router: Router) { }

  @Input("onePost") post! : Post;
  @Input("communityName") communityName!: string;
  @Output()postDeleted = new EventEmitter<Post>();
  @Output()postForReport = new EventEmitter<Post>();
  user! : User;
  moderator!: Moderator;
  postComments! : Comment[];
  flairExist: boolean = true;

  ngOnInit(): void {
    this.userService.returnUser().subscribe((response: User) => {
      this.user = response
      this.commentService.findCommentsForPost(this.post.id).subscribe((response: Comment[]) => {
        this.postComments = response
        if(this.post.flair == null)
          this.flairExist = false
      })
    })
  }

  openOneCommunity(id: number){
    this.router.navigate(["/oneCommunity",id])
  }

  deletePost(id: number){
    this.postService.deletePost(id).subscribe(response => {
      this.postDeleted.emit(response);
    });
  }

  addComment(comment: Comment){
    this.postComments.push(comment)
  }

  sortTop(){
    let sortType: SortType = {
      postId: this.post.id,
      sortType: 'Top'
    }
    this.commentService.getSortedComments(sortType).subscribe((response: Comment[]) => {
      this.postComments = response
    })
  }
  sortNew(){
    let sortType: SortType = {
      postId: this.post.id,
      sortType: 'New'
    }
    console.log("Selected new")
    this.commentService.getSortedComments(sortType).subscribe((response: Comment[]) => {
      this.postComments = response
    })
  }
  sortOld(){
    let sortType: SortType = {
      postId: this.post.id,
      sortType: 'Old'
    }
    console.log("Selected old")
    this.commentService.getSortedComments(sortType).subscribe((response: Comment[]) => {
      this.postComments = response
    })
  }

  report(){
    this.router.navigate(['report', 0, this.post.id])
  }

}
