import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ArticleManageComponent } from './article-manage/article-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';

import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: 'article',
        component: ArticleManageComponent,
      },
      {
        path: 'user',
        component: UserManageComponent,
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutesModule {}
