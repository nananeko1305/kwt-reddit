import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchCommunityService} from "../../service/search-community-service/search-community.service";
import {MultipleValuesCommunityDTO} from "../../model/DTO/MultipleValuesCommunityDTO";
import {CommunityElasticDTO} from "../../model/DTO/CommunityElasticDTO";

@Component({
  selector: 'app-search-community',
  templateUrl: './search-community.component.html',
  styleUrls: ['./search-community.component.css']
})
export class SearchCommunityComponent implements OnInit{

  formGroup: FormGroup;
  communityElasticList: CommunityElasticDTO[] = []

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchCommunityService,
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null],
      description: [null],
      minPosts: [null, Validators.min(0)],
      maxPosts: [null, Validators.min(0)],
      minKarma: [null, Validators.min(0)],
      maxKarma: [null, Validators.min(0)],
      pdfDescription: [null],
      rule: [null],
      searchAccuracy: ['OR'],
      searchType: ['FUZZY'],
      ruleCheckbox : [null]
    });
  }

  ngOnInit(): void {
    this.toggleRuleInput()
  }

  toggleRuleInput(): void {
    const ruleCheckboxControl = this.formGroup.get('ruleCheckbox');
    const ruleControl = this.formGroup.get('rule');
    const otherControls = ['name', 'description', 'minPosts', 'maxPosts', 'minKarma', 'maxKarma', 'pdfDescription'];

    if (ruleCheckboxControl && ruleControl) {
      if (ruleCheckboxControl.value) {
        ruleControl.enable();
        otherControls.forEach((controlName) => {
          const control = this.formGroup.get(controlName);
          if (control) {
            control.disable();
          }
        });
      } else {
        ruleControl.disable();
        otherControls.forEach((controlName) => {
          const control = this.formGroup.get(controlName);
          if (control) {
            control.enable();
          }
        });
      }
    }
  }


  search(){
    const formValues = this.formGroup.value;

    const multipleValuesCommunityDTO: MultipleValuesCommunityDTO = {
      name: formValues.name,
      description: formValues.description,
      minPosts: formValues.minPosts,
      maxPosts: formValues.maxPosts,
      minKarma: formValues.minKarma,
      maxKarma: formValues.maxKarma,
      pdfDescription: formValues.pdfDescription,
      rule: formValues.rule,
      searchAccuracy: formValues.searchAccuracy,
      searchType: formValues.searchType
    };
    console.log(JSON.stringify(multipleValuesCommunityDTO))

    this.searchService.searchCommunity(multipleValuesCommunityDTO).subscribe({
      next: (value) => {
        console.log(JSON.stringify(value))
        this.communityElasticList = value
      }
    })
  }






}
