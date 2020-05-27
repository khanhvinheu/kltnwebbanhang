import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';




@NgModule({
  declarations: [LoginDialogComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    
  ]
})
export class LoginAdminModule { }
