import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { AvifComponent } from './components/avif/avif.component';
import { HasComponent } from './components/has/has.component';


@NgModule({
  declarations: [
    GridComponent,
    AvifComponent,
    HasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
