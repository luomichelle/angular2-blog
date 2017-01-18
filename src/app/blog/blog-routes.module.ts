import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const articleRoutes: Routes = [
  {
    path: 'article',
    component: BlogComponent
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

export class  BlogRoutesModule {}
