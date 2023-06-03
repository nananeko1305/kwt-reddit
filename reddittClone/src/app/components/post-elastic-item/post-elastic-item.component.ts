import {Component, Input} from '@angular/core';
import {PostElasticDTO} from "../../model/DTO/PostElasticDTO";

@Component({
  selector: 'app-post-elastic-item',
  templateUrl: './post-elastic-item.component.html',
  styleUrls: ['./post-elastic-item.component.css']
})
export class PostElasticItemComponent {

  @Input() postElasticDTO: PostElasticDTO = new PostElasticDTO();

}
