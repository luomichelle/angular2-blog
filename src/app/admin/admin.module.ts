import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';

import { AdminRoutesModule } from './admin-routes.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutesModule
  ],
  declarations: [
    AdminComponent
  ]
})

export class AdminModule {

}
