import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banned } from 'src/app/model/banned';
import { Community } from 'src/app/model/community';
import { Flair } from 'src/app/model/flair';
import { Moderator } from 'src/app/model/moderator';
import { Rule } from 'src/app/model/rule';
import { CommunityService } from 'src/app/service/communityService/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  communityRequest: Community;
  communityForm!: FormGroup;

  constructor(private communityService: CommunityService, private router: Router) {
    this.communityRequest = {
      id: 0,
      name: '',
      description: '',
      creationDate: new Date,
      isSuspended: false,
      suspendedReason: '',
      moderators: [],
      banneds: [],
      rules: [],
      flairs: []
    }
  }

  ngOnInit(): void {
    this.communityForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  createCommunity() {
    this.communityRequest.name = this.communityForm.get('name')?.value;
    this.communityRequest.description = this.communityForm.get('description')?.value;
    this.communityService.saveCommunity(this.communityRequest).subscribe(
      data => {
        console.log(data)
        this.router.navigate([""]);
      },
      error => {
        console.error(error)
      })
  };

}
