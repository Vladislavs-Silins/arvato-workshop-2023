import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { AvifComponent } from './components/avif/avif.component';
import { HasComponent } from './components/has/has.component';
import { WhereComponent } from './components/where/where.component';
import { HasDivsComponent } from './components/has-divs/has-divs.component';
import { ContainerComponent } from './components/container/container.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    GridComponent,
    AvifComponent,
    HasComponent,
    WhereComponent,
    HasDivsComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
