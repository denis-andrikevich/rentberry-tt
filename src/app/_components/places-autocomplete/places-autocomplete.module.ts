import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularGooglePlaceModule } from 'angular-google-place';

import { PalcesAutocompleteComponent } from './palces-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularGooglePlaceModule
  ],
  declarations: [
    PalcesAutocompleteComponent
  ],
  exports: [
    PalcesAutocompleteComponent
  ]
})
export class PlacesAutocompleteModule { }
