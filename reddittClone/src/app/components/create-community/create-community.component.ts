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

  inputFlair: string = '';
  inputRule: string = '';
  communityRequest: Community;
  communityForm!: FormGroup;
  rules: Rule[] = [];
  flairs: Flair[] = [];
  selectedFile: File = new File([],"pdfFile")


  constructor(private communityService: CommunityService, private router: Router) {
    this.communityRequest = {
      id: 0,
      name: '',
      description: '',
      creationDate: new Date,
      isSuspended: false,
      suspendedReason: '',
      moderators: []
    }
  }


  ngOnInit(): void {
    this.communityForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      flair: new FormControl(''),
      rule: new FormControl('')
    });
  }

  onFileChanged(event:any){
    console.log(event)
    this.selectedFile = event.target.files[0];
  }

  createCommunity() {
    this.communityRequest.name = this.communityForm.get('name')?.value;
    this.communityRequest.description = this.communityForm.get('description')?.value;
    this.communityRequest.flairs = this.flairs
    this.communityRequest.rules = this.rules

    const formData = new FormData();
    formData.append('pdfFile', this.selectedFile);
    formData.append('jsonFile', JSON.stringify(this.communityRequest));

    this.communityService.saveCommunity(formData).subscribe(
      data => {
        console.log(data)
        this.router.navigate([""]);
      },
      error => {
        console.error(error)
      })
  };

  addFlair(flairName: string){
    let newFlair: Flair = {
      id: 0,
      name: '',
      deleted: false,
    }
    newFlair.name = flairName
    console.log(newFlair)
    this.flairs.push(newFlair);
    console.log(this.flairs)
    this.communityForm.patchValue({
      flair: ''
    })
  }

  addRule(rule :string){
    let newRule: Rule = {
      id: 0,
      description: '',
      isDeleted: false,
    }
    newRule.description = rule
    console.log(newRule)
    this.rules.push(newRule)
    console.log(this.rules)
    this.communityForm.patchValue({
      rule: ''
    })
  }

}
