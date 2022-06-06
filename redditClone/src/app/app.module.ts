import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    UserComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
