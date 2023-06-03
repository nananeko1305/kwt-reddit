import {CommentElasticDTO} from "./CommentElasticDTO";
import {CommunityElasticDTO} from "./CommunityElasticDTO";
import {FlairElasticDTO} from "./FlairElasticDTO";

export class PostElasticDTO {
  id?: number;
  title?: string;
  text?: string;
  karma?: number;
  numberOfComments?: number;
  community?: CommunityElasticDTO;
  flair?: FlairElasticDTO;
  commentElasticList?: CommentElasticDTO[];
  pdfDescription?: string;
}
