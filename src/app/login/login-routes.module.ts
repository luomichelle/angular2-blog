import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';

const loginRouters: Routes = [
	{
		path: '',
		component: LoginComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(loginRouters)
	],
	exports: [
		RouterModule
	],
	providers: [
	]
})
export class loginRoutersModule {}
