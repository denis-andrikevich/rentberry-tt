import { Route } from '@angular/router';

import { NotfoundComponent } from './notfound.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: NotfoundComponent }
];
