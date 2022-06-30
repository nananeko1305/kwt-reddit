import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Report } from 'src/app/model/report';
import { CommentService } from 'src/app/service/commentService/comment.service';
import { PostService } from 'src/app/service/postService/post.service';
import { ReposrtService } from 'src/app/service/reportService/reposrt.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  constructor(
    private reportService: ReposrtService,
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService) { }


  reportsForPost: Report[] = [];
  reportsForComment: Report[] = [];
  communityId: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.communityId = +params['id'];
      console.log(this.communityId)
      this.reportService.getReportsForCommunity(this.communityId, 0).subscribe((response: Report[]) => {
        this.reportsForPost = response
        console.log(JSON.stringify(this.reportsForPost))
        this.reportService.getReportsForCommunity(this.communityId, 1).subscribe((response: Report[]) => {
          this.reportsForComment = response
          console.log(JSON.stringify(this.reportsForPost))
        })
      })

    })
  }

  deleteComment(commentID: number | undefined){
    if(commentID != undefined){
      this.commentService.deleteComment(commentID).subscribe(response => {
        this.ngOnInit()
      })
    }
  }

  deletePost(postId: number | undefined){
    if(postId != undefined){
      this.postService.deletePost(postId).subscribe(response => {
        this.ngOnInit()
      })
    }
      
  }

}
