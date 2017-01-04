import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';

const routers: Routes = [
	{
		path: '',
		component: LoginComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routers);
