import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleWriteComponent } from './article-write/article-write.component';

import { AuthGuard } from '../auth-guard.service';

const articleRoutes: Routes = [
  {
    path: 'article/write',
    canActivate: [
      AuthGuard
    ],
    component: ArticleWriteComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class  ArticleRoutesModule {}
