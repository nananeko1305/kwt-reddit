import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit{

  formGroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
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
  }

}
