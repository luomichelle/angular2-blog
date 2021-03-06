import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'home',
  //   redirectTo: '/article'
  // },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail',
    loadChildren: './+detail/index#DetailModule'
  },
  {
    path: '',
    redirectTo: '/article',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoContentComponent
  },
];
