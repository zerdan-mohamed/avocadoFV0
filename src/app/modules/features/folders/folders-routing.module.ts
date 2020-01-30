import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoldersListComponent } from './folders-list/folders-list.component';

const routes: Routes = [
  { path: '', component: FoldersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule { }
