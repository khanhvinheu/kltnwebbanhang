import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PageRoutingModule } from './page-routing.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
