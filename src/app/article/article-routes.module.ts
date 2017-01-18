import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articleRoutes: Routes = [
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  }
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