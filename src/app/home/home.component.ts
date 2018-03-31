import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'angular-google-place';

import { GeolocationService } from '../core/utils/geolocation';

import { FormattedAddress } from '../core/models/places';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(private router: Router) { }

  onSubmit(address: FormattedAddress) {
    this.router.navigate(['/results'], {
      queryParams: {
        lat: address.latitude,
        lng: address.longtitude,
        city: address.locality,
        street: address.route,
        house: address.street_number
      }
    });
  }
}
