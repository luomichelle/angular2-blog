import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from './article';
import { ArticleService } from './article.service';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'blog',
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
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Article` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();

    this.getArticles();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
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