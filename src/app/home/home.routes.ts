import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];
