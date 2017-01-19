import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownModule } from 'angular2-markdown';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { ArticleService } from './article.service';

import { ArticleRoutesModule } from './article-routes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule,
    ArticleRoutesModule
  ],
  declarations: [
    ArticleComponent,
    ArticleDetailComponent
  ],
  providers: [
    ArticleService
  ]
})

export class ArticleModule {}
