import { Route } from '@angular/router';

import { ResultsComponent } from './results.component';

import { ResultsResolver } from './guards/results.resolver';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: ResultsComponent, resolve: { apiResponse: ResultsResolver } }
];
