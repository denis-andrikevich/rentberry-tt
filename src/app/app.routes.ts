import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', loadChildren: './home/home.module#HomeModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsModule' },
  { path: '**', redirectTo: '/' }
];
