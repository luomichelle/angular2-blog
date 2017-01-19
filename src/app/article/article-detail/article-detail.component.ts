import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Article } from '../article';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: [
    './article-detail.component.scss'
  ],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class ArticleDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

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
    this.router.navigate(['/article']);
  }

}
