import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ResetPassAdminComponent } from './reset-pass-admin/reset-pass-admin.component';
import { DanhMucComponent } from './danh-muc/danh-muc.component';
import { QuyenComponent } from './quyen/quyen.component';
import { DanhmuchinhComponent } from './danhmuchinh/danhmuchinh.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhuongthucthanhtoanComponent } from './phuongthucthanhtoan/phuongthucthanhtoan.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { ChitietkhuyenmaiComponent } from './chitietkhuyenmai/chitietkhuyenmai.component';



const routes: Routes = [
  { 
    path: '',
    component: AdminComponent,
    children: [  
      // {
      //   path: '', redirectTo:'admin' 
      // } , 
      {
        path: "", redirectTo: "dashboard", pathMatch: "full",
        
      },  
      {
        path:"dashboard",component:DashboardComponent
      },
      {
        path:'login', component:LoginAdminComponent
      },{
        path:'reset-pass-admin',
        component:ResetPassAdminComponent
      },
      {
        path:'danhmuc', component:DanhMucComponent
      },
      {
        path:'quyen', component:QuyenComponent
      },
      {
        path:'danhmuchinh', component:DanhmuchinhComponent
      },
      {
        path:'pttt' , component:PhuongthucthanhtoanComponent
      },
      {
        path:'khuyenmai', component:KhuyenmaiComponent
      },
      {
        path:'chitietkhuyenmai', component:ChitietkhuyenmaiComponent
      }
    ]
    
  }, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
