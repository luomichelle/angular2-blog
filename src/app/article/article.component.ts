import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from './article';
import { ArticleService } from './article.service';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'article-list',
  styleUrls: [
    './article.component.scss'
  ],
  templateUrl: './article.component.html',
  animations: [
    fadeIn
  ]
})
export class ArticleComponent {
  localState: any;
  articleList: Article[];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    public route: ActivatedRoute) {
    // this.articleList = articleService.getArticles();
  }

  ngOnInit() {
    console.log('hello `Article` component');
    this.getArticles();
  }

  getArticles(tagTxt?: String): void {
    this.articleService
        .getArticles(tagTxt)
        .subscribe(
          articles => this.articleList = articles,
          error => this.errorMessage = <any>error
        );
  }

  private errorMessage () {}

  onSelect(article: Article) {
    this.router.navigate(['/article', article.id]);
  }

  onTagFilter(tagTxt: String) {
    console.log('Tag filter: ' + tagTxt);
    this.getArticles(tagTxt);
  }

}
