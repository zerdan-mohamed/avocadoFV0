import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/features/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent
  },
  {
    path: 'clients',
    loadChildren: './modules/features/clients/clients.module#ClientsModule'
  },
  {
    path: 'contrats',
    loadChildren: () => import('./modules/features/contrats/contrats.module').then(m => m.ContratsModule)
  },
  {
    path: 'folders',
    loadChildren: () => import('./modules/features/folders/folders.module').then(m => m.FoldersModule)
  },
  {
    path: 'procedures',
    loadChildren: () => import('./modules/features/procedures/procedures.module').then(m => m.ProceduresModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./modules/features/documents/documents.module').then(m => m.DocumentsModule)
  }
  /*
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
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
