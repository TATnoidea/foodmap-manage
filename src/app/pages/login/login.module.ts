import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {}
