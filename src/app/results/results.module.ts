import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './results.routes';

import { ResultsComponent } from './results.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultsComponent]
})
export class ResultsModule { }
