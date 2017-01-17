import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const blogRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class  BlogRoutesModule {}
