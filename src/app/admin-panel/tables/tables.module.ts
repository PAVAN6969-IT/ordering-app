import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './component/tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ]
})
export class TablesModule { }
