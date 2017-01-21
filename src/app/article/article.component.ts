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
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     // your resolved data from route
    //     this.localState = data.yourData;
    //   });

    console.log('hello `Article` component');
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
        .getArticles()
        .subscribe(
          articles => this.articleList = articles,
          error => this.errorMessage = <any>error
        );
  }

  private errorMessage () {}

  onSelect(article: Article) {
    this.router.navigate(['/article', article.id]);
  }

}
