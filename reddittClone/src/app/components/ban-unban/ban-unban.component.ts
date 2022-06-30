import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Banned } from 'src/app/model/banned';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { Community } from 'src/app/model/community';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Moderator } from 'src/app/model/moderator';
import { ModeratorService } from 'src/app/service/moderatorService/moderator.service';
import { BanService } from 'src/app/service/banService/ban.service';

@Component({
  selector: 'app-ban-unban',
  templateUrl: './ban-unban.component.html',
  styleUrls: ['./ban-unban.component.css']
})
export class BanUnbanComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private route: ActivatedRoute,
    private moderatorService: ModeratorService,
    private banService: BanService) { }

  users: User[] = [];

  user : User = {
    id: 0,
    username: '',
    role: '',
    password: '',
    email: '',
    avatar: '',
    registrationDate: new Date,
    description: '',
    displayName: ''
  }
  community: Community = {
    id: 0,
    name: '',
    description: '',
    creationDate: new Date,
    isSuspended: false,
    suspendedReason: '',
    moderators: []
  };
  communityId: number = 0;
  ban: Banned = {
    id: 0,
    timestamp: new Date,
    user: {
      id: 0,
      username: '',
      role: '',
      password: '',
      email: '',
      avatar: '',
      registrationDate: new Date,
      description: '',
      displayName: ''
    },
    community: {
      id: 0,
      name: '',
      description: '',
      creationDate: new Date,
      isSuspended: false,
      suspendedReason: '',
      moderators: []
    },
    moderator: {
      id: 0,
      user: this.user,
      community: this.community,
      isDeleted: false
    },
  }
  moderator!: Moderator;
  currentUser! : User;


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.communityId = +params["id"] })
    this.userService.findAll().subscribe((response: User[]) => {
      this.users = response
      console.log(response)
      this.userService.returnUser().subscribe((response: User) => {
        this.currentUser = response
        console.log(response)
        this.moderatorService.getModeratorByUserId(this.currentUser.id, this.communityId).subscribe((response: Moderator) => {
          this.moderator = response
          console.log(response)
        })
      })
      
    })
  }

  banUser(user: User) {
    this.ban.user = user
    this.ban.community!.id = this.communityId,
    this.ban.moderator = this.moderator
    this.ban.timestamp = new Date;
    this.banService.save(this.ban).subscribe()
  }

  unbanUser(user: User) {
    this.banService.unban(this.ban).subscribe()
  }
}
