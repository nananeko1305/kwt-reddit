import { Component, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';
import { CommunityService } from 'src/app/service/communityService/community.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-suspend-community',
  templateUrl: './suspend-community.component.html',
  styleUrls: ['./suspend-community.component.css']
})
export class SuspendCommunityComponent implements OnInit {

  suspendForm!: FormGroup;
  community!: Community;
  id!: number;

  constructor(private communityService: CommunityService,
    private route: ActivatedRoute,
    private router: Router) { }

  

  ngOnInit(): void {
    this.suspendForm = new FormGroup({
      reason: new FormControl('', Validators.required),
    });
    this.route.params.subscribe((params: Params) => { this.id = +params["id"] })
    this.communityService.getOneCommunity(this.id).subscribe((response: Community) => {
      this.community = response
    })
  }
  
  suspend(){
    this.community.suspendedReason = this.suspendForm.get('reason')?.value;
    this.communityService.suspendCommunity(this.community).subscribe((response: Community) => {
      this.router.navigate([""])
    })
    
  }

}
