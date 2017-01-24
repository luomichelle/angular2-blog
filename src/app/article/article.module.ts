import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MarkdownModule } from 'angular2-markdown';
import { DisqusModule } from "ng2-awesome-disqus";

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleWriteComponent } from './article-write/article-write.component';

import { ArticleService } from './article.service';

import { ArticleRoutesModule } from './article-routes.module';
@NgModule({
  imports: [
    SharedModule,
    DisqusModule,
    MarkdownModule,
    ArticleRoutesModule
  ],
  declarations: [
    ArticleComponent,
    ArticleDetailComponent,
    ArticleWriteComponent
  ],
  providers: [
    ArticleService
  ]
})

export class ArticleModule {}
