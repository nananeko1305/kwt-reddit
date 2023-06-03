import {Component, Input, OnInit} from '@angular/core';
import {CommunityElasticDTO} from "../../model/DTO/CommunityElasticDTO";

@Component({
  selector: 'app-community-elastic-list',
  templateUrl: './community-elastic-list.component.html',
  styleUrls: ['./community-elastic-list.component.css']
})
export class CommunityElasticListComponent implements OnInit{

  @Input() communityElasticList: CommunityElasticDTO[] = [];

  ngOnInit(): void {
  }

}
