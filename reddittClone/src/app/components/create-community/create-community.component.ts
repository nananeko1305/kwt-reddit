import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { CommunityRequest } from './create-community-post';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  communityRequest: CommunityRequest;
  communityForm!: FormGroup;

  constructor(private communityService: CommunityService, private router: Router) {
    this.communityRequest = {
      name: '',
      description: ''
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
