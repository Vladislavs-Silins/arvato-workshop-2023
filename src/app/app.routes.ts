import { Route } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { AvifComponent } from './components/avif/avif.component';
import { HasComponent } from './components/has/has.component';

export const appRoutes: Route[] = [
  { path: 'grid', component: GridComponent },
  { path: 'avif', component: AvifComponent },
  { path: 'has', component: HasComponent },
];
