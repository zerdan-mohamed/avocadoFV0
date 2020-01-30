import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsListComponent } from './contrats-list/contrats-list.component';


@NgModule({
  declarations: [ContratsListComponent],
  imports: [
    CommonModule,
    ContratsRoutingModule
  ]
})
export class ContratsModule { }
