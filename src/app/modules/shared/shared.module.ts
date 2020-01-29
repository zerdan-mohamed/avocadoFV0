import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppMaterialModule } from '../../app-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class SharedModule { }
