import {Article} from "./article.model";
import {ArticleService} from "../services/article.service";

export class ArticleDTO {
  articles: Article[];
  totalItems: number;
  totalPages: number;
  currentPage: number;

  constructor() {
    this.articles = [];
    this.totalItems = -1;
    this.totalPages = -1;
    this.currentPage = -1;
  }
}
