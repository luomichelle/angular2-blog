import { Injectable } from '@angular/core';
import { Logger } from '../logger.service';
import { Article } from './article';
import { articleList } from './mock-article-list';

@Injectable()

export class ArticleService {

  constructor(private logger: Logger) {}

  getArticles(): Promise<Article[]> {
    this.logger.log('Getting article...');
    return Promise.resolve(articleList);
  }
}