import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { ArticleService } from './article.service';

import { ArticleRoutesModule } from './article-routes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
