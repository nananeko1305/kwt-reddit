import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateCommunityComponent } from './components/create-community/create-community.component';
import { OneCommunityComponent } from './components/one-community/one-community.component';
import { VoteComponent } from './components/vote/vote.component';
import { InfoComponent } from './components/info/info.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { ErrorComponent } from './components/error/error.component';
import { CommentComponent } from './components/comment/comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { VoteComponentComponent } from './components/vote-component/vote-component.component';
import { SuspendCommunityComponent } from './components/suspend-community/suspend-community.component';
import { AddFlairsAndRulesComponent } from './components/add-flairs-and-rules/add-flairs-and-rules.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    PostComponent,
    CreatePostComponent,
    CreateCommunityComponent,
    OneCommunityComponent,
    VoteComponent,
    InfoComponent,
    PasswordChangeComponent,
    ErrorComponent,
    CommentComponent,
    CreateCommentComponent,
    VoteComponentComponent,
    SuspendCommunityComponent,
    AddFlairsAndRulesComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
