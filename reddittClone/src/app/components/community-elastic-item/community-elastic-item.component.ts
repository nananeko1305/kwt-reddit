import {Component, Input} from '@angular/core';
import {CommunityElasticDTO} from "../../model/DTO/CommunityElasticDTO";

@Component({
  selector: 'app-community-elastic-item',
  templateUrl: './community-elastic-item.component.html',
  styleUrls: ['./community-elastic-item.component.css']
})
export class CommunityElasticItemComponent {

  @Input() communityElastic: CommunityElasticDTO = new CommunityElasticDTO();

}
