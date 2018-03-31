import { Route } from '@angular/router';

import { ResultsComponent } from './results.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: ResultsComponent }
];
