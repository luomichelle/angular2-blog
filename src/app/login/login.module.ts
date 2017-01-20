import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {LoginComponent} from './login.component';

import {loginRoutersModule } from './login-routes.module';

@NgModule({
	imports: [
		SharedModule,
    loginRoutersModule
	],
	declarations: [
		LoginComponent
	]
})

export class LoginModule {}
