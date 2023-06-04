import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MultipleValuesCommunityDTO} from "../../model/DTO/MultipleValuesCommunityDTO";
import {PostElasticDTO} from "../../model/DTO/PostElasticDTO";
import {SearchPostService} from "../../service/search-post-service/search-post.service";
import {MultipleValuesPostDTO} from "../../model/DTO/MultipleValuesPostDTO";

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
      searchAccuracy: ['OR'],
      searchType: ['FUZZY'],
      commentCheckbox: [null],
      flairCheckbox: [null]
    });
  }

  ngOnInit(): void {
    const commentControl = this.formGroup.get('commentWordFind');
    const flairControl = this.formGroup.get('flair');
    commentControl?.disable()
    flairControl?.disable()
  }

  toggleCommentInput(): void {
    const commentCheckboxControl = this.formGroup.get('commentCheckbox');
    const commentControl = this.formGroup.get('commentWordFind');
    const otherControls = ['title', 'text', 'minComments', 'maxComments', 'minKarma', 'maxKarma', 'pdfDescription', 'flair'];

    if (commentCheckboxControl && commentControl) {
      console.log(commentCheckboxControl.value)
      if (commentCheckboxControl.value) {
        commentControl.enable();
        otherControls.forEach((controlName) => {
          const control = this.formGroup.get(controlName);
          if (control) {
            control.disable();
          }
        });
      } else {
        commentControl.disable();
        otherControls.forEach((controlName) => {
          const control = this.formGroup.get(controlName);
          if (control) {
            control.enable();
          }
        });
      }
    }
  }

  toggleFlairInput(): void {
    const flairCheckboxControl = this.formGroup.get('flairCheckbox');
    const flairControl = this.formGroup.get('flair');
    const otherControls = ['title', 'text', 'minComments', 'maxComments', 'minKarma', 'maxKarma', 'pdfDescription', 'commentWordFind'];

    if (flairCheckboxControl && flairControl) {
      if (flairCheckboxControl.value) {
        flairControl.enable();
        otherControls.forEach((controlName) => {
          const control = this.formGroup.get(controlName);
          if (control) {
            control.disable();
          }
        });
      } else {
        flairControl.disable();
        otherControls.forEach((controlName) => {
          console.log(controlName)
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

    const multipleValuesPostDTO: MultipleValuesPostDTO = {
      title: formValues.title,
      text: formValues.text,
      minComments: formValues.minComments,
      maxComments: formValues.maxComments,
      minKarma: formValues.minKarma,
      maxKarma: formValues.maxKarma,
      pdfDescription: formValues.pdfDescription,
      flair: formValues.flair,
      commentWordFind: formValues.commentWordFind,
      searchAccuracy: formValues.searchAccuracy,
      searchType: formValues.searchType
    };
    console.log(JSON.stringify(multipleValuesPostDTO))

    this.searchService.searchPost(multipleValuesPostDTO).subscribe({
      next: (value) => {
        console.log(JSON.stringify(value))
        this.postElasticList = value
      }
    })
  }

}
