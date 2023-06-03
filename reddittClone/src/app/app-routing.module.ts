import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFlairsAndRulesComponent } from './components/add-flairs-and-rules/add-flairs-and-rules.component';
import { BanUnbanComponent } from './components/ban-unban/ban-unban.component';
import { CreateCommunityComponent } from './components/create-community/create-community.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { OneCommunityComponent } from './components/one-community/one-community.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportComponent } from './components/report/report.component';
import { SuspendCommunityComponent } from './components/suspend-community/suspend-community.component';
import { ViewReportsComponent } from './components/view-reports/view-reports.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import {SearchCommunityComponent} from "./components/search-community/search-community.component";
import {SearchPostComponent} from "./components/search-post/search-post.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'createPost/:id', component: CreatePostComponent },
  { path: 'createCommunity', component: CreateCommunityComponent },
  { path: 'oneCommunity/:id', component: OneCommunityComponent},
  { path: 'info', component: InfoComponent},
  { path: 'passwordChange/:id', component: PasswordChangeComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'suspendCommunity/:id', component: SuspendCommunityComponent},
  { path: 'oneCommunity/:id/add', component: AddFlairsAndRulesComponent},
  { path: 'report/:object/:id', component: ReportComponent},
  { path: 'oneCommunity/:id/reports', component: ViewReportsComponent},
  { path: 'oneCommunity/:id/users', component: ViewUsersComponent},
  { path: 'oneCommunity/:id/ban', component: BanUnbanComponent},
  { path: 'search-community', component: SearchCommunityComponent},
  { path: 'search-posts', component: SearchPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
