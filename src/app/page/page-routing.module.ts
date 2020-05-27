import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageComponent } from './page.component';



const routes: Routes = [
  { 
    path: '',
    component: PageComponent,
    children: [  
      {
        path: '', component:HomepageComponent
      } ,   
      
    ]
    
  }, 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
