/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

// import { fadeIn } from './animations/fade-in';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.component.scss'
  ],
  templateUrl: './app.component.html',
  animations: [
    // fadeIn
  ]
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Blog';
  url = 'https://github.com/EricThsi';
  currDate:Date = new Date();

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
