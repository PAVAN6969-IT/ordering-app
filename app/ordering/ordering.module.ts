import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    AccordionModule.forRoot()
  ]
})
export class OrderingModule { }
