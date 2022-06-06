import { Component } from '@angular/core';
import { UserComponent } from './component/user/user.component';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redditClone';

  constructor(private user: User) {}
}
