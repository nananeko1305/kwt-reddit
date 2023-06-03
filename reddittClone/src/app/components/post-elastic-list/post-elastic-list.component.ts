import {Component, Input} from '@angular/core';
import {PostElasticDTO} from "../../model/DTO/PostElasticDTO";

@Component({
  selector: 'app-post-elastic-list',
  templateUrl: './post-elastic-list.component.html',
  styleUrls: ['./post-elastic-list.component.css']
})
export class PostElasticListComponent {

  @Input() postElasticList: PostElasticDTO[] = [];


}
