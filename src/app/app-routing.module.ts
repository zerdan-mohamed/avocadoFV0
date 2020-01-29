import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'admin', pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/features/features.module').then(m => m.FeaturesModule)
  }
  /* 
  ,
  {
    path: '**', component: NotFoundComponent
  } 
  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
