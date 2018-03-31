import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './results.routes';

import { ResultsResolver } from './guards/results.resolver';
import { SearchPlacesService } from './services/search-places.service';

import { ResultsComponent } from './results.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ResultsComponent
  ],
  providers: [
    ResultsResolver,
    SearchPlacesService
  ]
})
export class ResultsModule { }
