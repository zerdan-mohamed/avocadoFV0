import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersListComponent } from './folders-list/folders-list.component';


@NgModule({
  declarations: [FoldersListComponent],
  imports: [
    CommonModule,
    FoldersRoutingModule
  ]
})
export class FoldersModule { }
