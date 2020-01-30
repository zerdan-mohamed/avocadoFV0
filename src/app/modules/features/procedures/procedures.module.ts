import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProceduresRoutingModule } from './procedures-routing.module';
import { ProceduresListComponent } from './procedures-list/procedures-list.component';


@NgModule({
  declarations: [ProceduresListComponent],
  imports: [
    CommonModule,
    ProceduresRoutingModule
  ]
})
export class ProceduresModule { }
