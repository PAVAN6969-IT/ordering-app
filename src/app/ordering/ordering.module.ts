import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrderingRoutingModule } from './ordering-routing.module';
import { OrderingComponent } from './component/ordering.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    OrderingComponent
  ],
  imports: [
    CommonModule,
    OrderingRoutingModule,
    HttpClientModule,
    AccordionModule.forRoot()
  ]
})
export class OrderingModule { }
