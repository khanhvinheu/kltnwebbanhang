import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginAdminModule } from '../admin/login-admin/login-admin.module';
import { DemoMaterialModule } from '../admin/material-module';
import { AdminRoutingModule } from '../admin/admin-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoMaterialModule,
    FormsModule,
    LoginAdminModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,RouterModule,
    CommonModule,
  ]
})
export class ConfirmDialogModule { }
