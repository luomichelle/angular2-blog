import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user';
import { fadeIn } from '../animations/fade-in';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  styleUrls: [
    './login.component.scss'
  ],
  templateUrl: './login.component.html',
  animations: [
    fadeIn
  ]
})
export class LoginComponent {
  localState: any;
  submitted: Boolean = false;
  loginUser: User;
  message: string;
  constructor(public route: ActivatedRoute, public authService: AuthService, public router: Router) {
     this.loginUser = new User(18, '', '', '');
  }

  ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     // your resolved data from route
    //     this.localState = data.yourData;
    //   });

    console.log('hello `login` component');
  }

  sendMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  onSubmit() {
    this.submitted = true;
  }

  login() {
    this.loginUser = new User(42, '', '', '');
    this.message = 'Trying to log in ...';

    this.authService.login()
                  .subscribe(() => {
                    this.sendMessage();
                    if (this.authService.isLoggedIn) {
                      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                      this.router.navigate([redirect]);
                    }
                  })
  }

  logout() {
    this.authService.logout();
    this.sendMessage();
  }

  get diagnostic() {
    return JSON.stringify(this.loginUser);
  }

}
