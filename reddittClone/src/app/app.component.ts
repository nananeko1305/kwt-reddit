import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Post } from './model/post';
import { PostService } from './service/postService/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddittClone';

  posts!: Post[];

  constructor(private postService : PostService){}


  ngOnInit(): void {
    this.getAllPosts();
  }


  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}



