import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { Report } from 'src/app/model/report';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/commentService/comment.service';
import { PostService } from 'src/app/service/postService/post.service';
import { ReposrtService } from 'src/app/service/reportService/reposrt.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild('selectReportType')selectedType!: ElementRef;
  post: Post = {
    id: 0,
    title: '',
    text: '',
    creationDate: new Date,
    imagePath: '',
    isDeleted: false
  };
  comment : Comment = {
    id: 0,
    text: '',
    timestamp: new Date,
    isDeleted: false,
  };
  reportType!: number;
  id!: number;
  user!: User;

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private reportService: ReposrtService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.reportType = +params['object'];
      this.id = +params['id'];
    })
    this.userService.returnUser().subscribe((response: User) => {
      this.user = response
      console.log(response)
    })
    if(this.reportType == 0){
      this.postService.getOnePost(this.id).subscribe((response: Post) => {
        this.post = response
      })
    }else{
      this.commentService.findOneComment(this.id).subscribe((response: Comment) => {
        this.comment = response
      })
    }
    
    
  }

  report(type: number){
    console.log(type)
    let report: Report = {
      id: 0,
      reportReason: this.selectedType.nativeElement.value,
      timestamp: new Date,
      accepted: false,
      user: this.user,
      post: {
        id: this.post.id,
        title: this.post.title,
        text: this.post.title,
        creationDate: this.post.creationDate,
        imagePath: this.post.imagePath,
        isDeleted: this.post.isDeleted,
        user: this.user
      },
      comment : {
        id: this.comment.id,
        text: this.comment.text,
        timestamp: this.comment.timestamp,
        isDeleted: this.comment.isDeleted,
        user: this.user
      }
    }
    if(type == 0){
      report.post = {
        id: this.post.id,
        title: this.post.title,
        text: this.post.title,
        creationDate: this.post.creationDate,
        imagePath: this.post.imagePath,
        isDeleted: this.post.isDeleted
      }
      console.log(report.reportReason)
      this.reportService.saveReport(report).subscribe()
    }else{
      report.comment = {
        id: this.comment.id,
        text: this.comment.text,
        timestamp: this.comment.timestamp,
        isDeleted: this.comment.isDeleted,
      }
      console.log(report.reportReason)
      this.reportService.saveReport(report).subscribe()
    }
    this.router.navigate(["/"])
  }
}
