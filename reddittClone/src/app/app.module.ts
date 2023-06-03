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
import { ViewReportsComponent } from './components/view-reports/view-reports.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { BanUnbanComponent } from './components/ban-unban/ban-unban.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { SearchCommunityComponent } from './components/search-community/search-community.component';
import { SearchPostComponent } from './components/search-post/search-post.component';
import {MatCardModule} from "@angular/material/card";
import { CommunityElasticItemComponent } from './components/community-elastic-item/community-elastic-item.component';
import { CommunityElasticListComponent } from './components/community-elastic-list/community-elastic-list.component';
import { PostElasticListComponent } from './components/post-elastic-list/post-elastic-list.component';
import { PostElasticItemComponent } from './components/post-elastic-item/post-elastic-item.component';

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
    ReportComponent,
    ViewReportsComponent,
    ViewUsersComponent,
    BanUnbanComponent,
    SearchCommunityComponent,
    SearchPostComponent,
    CommunityElasticItemComponent,
    CommunityElasticListComponent,
    PostElasticListComponent,
    PostElasticItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
