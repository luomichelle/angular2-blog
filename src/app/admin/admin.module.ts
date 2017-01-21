import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ArticleManageComponent } from './article-manage/article-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { TagManageComponent } from './tag-manage/tag-manage.component';
import { MaterialManageComponent } from './material-manage/material-manage.component';

import { AdminRoutesModule } from './admin-routes.module';

@NgModule({
  imports: [
    ChartsModule,
    SharedModule,
    AdminRoutesModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ArticleManageComponent,
    UserManageComponent,
    TagManageComponent,
    MaterialManageComponent
  ]
})

export class AdminModule {

}
