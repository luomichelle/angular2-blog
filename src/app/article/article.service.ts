import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Logger } from '../logger.service';
import { Article } from './article';

@Injectable()

export class ArticleService {
  private articleUrl = 'http://localhost:3050/articles'; // URL to web API
  // private articleUrl = 'assets/mock-data/articles.json'; // URL to web API

  constructor(private logger: Logger, private http: Http) {}

  getArticles(tag?: String): Observable<Article[]> {
    // this.logger.log('Getting article...');
    // console.log(tag);
    return this.http.get(this.articleUrl)
                .map(this.extractData)
                .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log(res.json());
    return body.data || body || [];
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
