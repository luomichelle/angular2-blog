import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ArticleManageComponent } from './article-manage/article-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';

import { AdminRoutesModule } from './admin-routes.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutesModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ArticleManageComponent,
    UserManageComponent
  ]
})

export class AdminModule {

}
