import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
  ]
})
export class LoginModule {}
