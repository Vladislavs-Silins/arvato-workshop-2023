import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { AvifComponent } from './components/avif/avif.component';
import { HasComponent } from './components/has/has.component';
import { WhereComponent } from './components/where/where.component';
import { HasDivsComponent } from './components/has-divs/has-divs.component';
import { ContainerComponent } from './components/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { StartingPageComponent } from './components/starting-page/starting-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GridComponent,
    AvifComponent,
    HasComponent,
    WhereComponent,
    HasDivsComponent,
    ContainerComponent,
    StartingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
})
export class AppModule {}
