import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { AvifComponent } from './components/avif/avif.component';


@NgModule({
  declarations: [
    GridComponent,
    AvifComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
