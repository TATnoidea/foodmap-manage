import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {} from '@angular/material';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManageRoutingModule,
  ],
  declarations: [
    ManageComponent,
  ],
})
export class ManageModule {}
