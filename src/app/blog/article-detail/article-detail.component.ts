import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Article } from '../article';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: [
    './article-detail.component.scss'
  ]
})

export class ArticleDetailComponent {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((article: Article) => this.article = article);
  }

  gotoBlog() {
    this.router.navigate(['/blog']);
  }

}
