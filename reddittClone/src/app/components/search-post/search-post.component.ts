import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MultipleValuesCommunityDTO} from "../../model/DTO/MultipleValuesCommunityDTO";
import {PostElasticDTO} from "../../model/DTO/PostElasticDTO";
import {SearchPostService} from "../../service/search-post-service/search-post.service";

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit{

  formGroup: FormGroup;
  postElasticList: PostElasticDTO[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchPostService,
  ) {
    this.formGroup = this.formBuilder.group({
      title: [null],
      text: [null],
      minComments: [null, Validators.min(0)],
      maxComments: [null, Validators.min(0)],
      minKarma: [null, Validators.min(0)],
      maxKarma: [null, Validators.min(0)],
      pdfDescription: [null],
      commentWordFind: [null],
      flair: [null],
      rule: [null],
      searchAccuracy: ['OR'],
      searchType: ['FUZZY']
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

    this.searchService.searchPost(multipleValuesCommunityDTO).subscribe({
      next: (value) => {
        console.log(JSON.stringify(value))
        this.postElasticList = value
      }
    })
  }

}
