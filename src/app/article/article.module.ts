import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MarkdownModule } from 'angular2-markdown';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { ArticleService } from './article.service';

import { ArticleRoutesModule } from './article-routes.module';
@NgModule({
  imports: [
    SharedModule,
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
