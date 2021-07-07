import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article.model";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements OnInit {

  articles: any[];

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.retrieveArticles();
  }

  retrieveArticles(): void {
    this.articleService.getAll()
      .subscribe(
        data => {
          this.articles = data.articles;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
