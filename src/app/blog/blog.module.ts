import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogComponent } from './blog.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { ArticleService } from './article.service';

import { BlogRoutesModule } from './blog-routes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutesModule
  ],
  declarations: [
    BlogComponent,
    ArticleDetailComponent
  ],
  providers: [
    ArticleService
  ]
})

export class BlogModule {}
