import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'login',
  styleUrls: [
    './login.component.scss'
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  localState: any;
  submitted: Boolean = false;
  loginUser: User;
  constructor(public route: ActivatedRoute) {
     this.loginUser = new User(18, '', '', '');
  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `login` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

  onSubmit() {
    this.submitted = true;
  }

  login() {
    this.loginUser = new User(42, '', '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.loginUser);
  }

}
