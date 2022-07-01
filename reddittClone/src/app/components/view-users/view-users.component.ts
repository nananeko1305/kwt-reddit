import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Moderator } from 'src/app/model/moderator';
import { User } from 'src/app/model/user';
import { ModeratorService } from 'src/app/service/moderatorService/moderator.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private moderatorService: ModeratorService,
    private route: ActivatedRoute) { }
  
  thisModerator!: Moderator;
  moderators: Moderator[] = [];
  moderatorShow: Moderator[] = []
  users: User[] = [];
  usersShow: User[] = [];
  communityId: number = 0;

  ngOnInit(): void {
    this.moderators = [];
    this.users = [];
    this.moderatorShow = [];
    this.usersShow = [];
    this.route.params.subscribe((params: Params) => {
      this.communityId = +params['id']
    });
    this.moderatorService.findAll().subscribe((response: Moderator[]) => {
      for (let moderator of response) {
        
        if (moderator.community?.id == this.communityId)
          this.moderators.push(moderator)
      }
      this.userService.findAll().subscribe((response: User[]) => {
        this.users = response

        for (let user of this.users) {
          let isModerator = false;
          for (let moderator of this.moderators) {
            if (user.id == moderator.user?.id && moderator.deleted != true) {
              this.moderatorShow.push(moderator)
              console.log(moderator.id)
              isModerator = true
            }
          }
          if (!isModerator)
            this.usersShow.push(user)
        }
      })
    })
  }

  saveModerator(userId: number) {
    

    let community: Community = {
      id: 0,
      name: '',
      description: '',
      creationDate: new Date,
      isSuspended: false,
      suspendedReason: '',
      moderators: []
    }

    let user: User = {
      id: userId,
      username: '',
      role: 'USER',
      password: '',
      email: '',
      avatar: '',
      registrationDate: new Date,
      description: '',
      displayName: ''
    }

    let moderator: Moderator = {
      id: 0,
      deleted: false,
      user: user,
      community: community
    }

    this.moderatorService.getModeratorByUserId(userId, this.communityId).subscribe((response: Moderator) => {
      moderator =response
      console.log(moderator.community?.id)
      if(this.communityId == moderator.community?.id){
        this.moderatorService.save(moderator).subscribe(response => {
          this.ngOnInit()
        })
      }else{
        moderator.id = 0;
        moderator.community!.id = this.communityId
        this.moderatorService.save(moderator).subscribe(response => {
          this.ngOnInit()})
      }
      
    })
    
  }

  deleteModerator(moderator: Moderator) {
    console.log(moderator.id)
    let moderatorRet: Moderator = {
      id: moderator.id,
      user: moderator.user,
      community: moderator.community,
      deleted: true
    }
    this.moderatorService.delete(moderator).subscribe(response => {
      this.ngOnInit()
    })
  }


}
