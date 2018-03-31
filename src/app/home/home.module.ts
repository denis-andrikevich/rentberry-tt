import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PlacesAutocompleteModule } from './../_components/places-autocomplete/places-autocomplete.module';

import { HomeComponent } from './home.component';

import { routes } from './home.routes';

import { GeolocationService } from './../core/utils/geolocation';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PlacesAutocompleteModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    GeolocationService
  ]
})
export class HomeModule { }
