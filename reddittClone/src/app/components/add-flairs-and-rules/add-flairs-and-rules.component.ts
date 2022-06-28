import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Flair } from 'src/app/model/flair';
import { Rule } from 'src/app/model/rule';
import { FlairService } from 'src/app/service/flairService/flair.service';
import { RuleService } from 'src/app/service/ruleService/rule.service';

@Component({
  selector: 'app-add-flairs-and-rules',
  templateUrl: './add-flairs-and-rules.component.html',
  styleUrls: ['./add-flairs-and-rules.component.css']
})
export class AddFlairsAndRulesComponent implements OnInit {

  rules!: Rule[];
  flairs!: Flair[];
  id!: number;
  addFlairForm!: FormGroup;
  addRuleForm!: FormGroup;
  

  constructor(private ruleService: RuleService,
    private flairService: FlairService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.addFlairForm = new FormGroup({
      addFlair: new FormControl('', Validators.required)
    })

    this.addRuleForm = new FormGroup({
      addRule: new FormControl('', Validators.required)
    })

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
    })
    this.ruleService.getAllRulesForCommunity(this.id).subscribe((response: Rule[]) => {
      this.rules = response
    })
    this.flairService.getFlairsForCommunity(this.id).subscribe((response: Flair[]) => {
      this.flairs = response
    })
  }

  addFlair() {
    var flair: Flair = {
      id: 0,
      name: '',
      deleted: false
    }
    flair.name = this.addFlairForm.get('addFlair')?.value
    this.addFlairForm.controls['addFlair'].setValue('');
    this.flairService.addFlair(this.id, flair).subscribe((response: Flair) => {
      this.flairs.push(response)
    })
  }
  
  deleteFlair(idFlair: number){
    var flair: Flair = {
      id: idFlair,
      name: '',
      deleted: true
    }
    this.flairService.deleteFlair(this.id, flair).subscribe((response: Flair) => {
      console.log(response)
      this.flairService.getFlairsForCommunity(this.id).subscribe((response: Flair[]) => {
        this.flairs = response
      })
    })
    
  }

  addRule() {
    const rule: Rule = {
      id: 0,
      description: '',
      isDeleted: false,
    }
    rule.description = this.addRuleForm.get('addRule')?.value
    this.addRuleForm.controls['addRule'].setValue('');
    this.ruleService.addRule(this.id, rule).subscribe((response: Rule) => {
      console.log(response)
      this.rules.push(response)
    })
  }

  deleteRule(ruleId: number){
    const rule: Rule = {
      id: ruleId,
      description: '',
      isDeleted: true,
    }
    this.ruleService.deleteRule(this.id, rule).subscribe((response: Rule) => {
      console.log(response)
      this.ruleService.getAllRulesForCommunity(this.id).subscribe((response: Rule[]) => {
        this.rules = response
      })
    })
    
  }
  

}
