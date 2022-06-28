import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFlairsAndRulesComponent } from './components/add-flairs-and-rules/add-flairs-and-rules.component';
import { CreateCommunityComponent } from './components/create-community/create-community.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { OneCommunityComponent } from './components/one-community/one-community.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { RegisterComponent } from './components/register/register.component';
import { SuspendCommunityComponent } from './components/suspend-community/suspend-community.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
