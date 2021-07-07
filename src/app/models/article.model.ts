import {User} from "./user.model";
import {ArticleService} from "../services/article.service";

export class Article {
  id?: number;
  title?: string;
  excerpt?: string;
  content?: boolean;
  active?: boolean;
  user?: User;
}


