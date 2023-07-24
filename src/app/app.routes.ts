import { Route } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { AvifComponent } from './components/avif/avif.component';
import { HasComponent } from './components/has/has.component';
import { WhereComponent } from './components/where/where.component';
import { HasDivsComponent } from './components/has-divs/has-divs.component';
import { ContainerComponent } from './components/container/container.component';
import { ViewTransitionDemoComponent } from './components/view-transition-demo/view-transition-demo.component';
import { StartingPageComponent } from './components/starting-page/starting-page.component';

export const appRoutes: Route[] = [
  { path: '', component: StartingPageComponent },
  { path: 'grid', component: GridComponent },
  { path: 'avif', component: AvifComponent },
  { path: 'has', component: HasComponent },
  { path: 'has-divs', component: HasDivsComponent },
  { path: 'where', component: WhereComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'view-transitions', component: ViewTransitionDemoComponent },
];
