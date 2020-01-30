import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratsListComponent } from './contrats-list/contrats-list.component';

const routes: Routes = [
  { path: '', component: ContratsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
