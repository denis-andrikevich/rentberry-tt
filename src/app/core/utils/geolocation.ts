import { FormattedAddress } from './../models/places';
import { Injectable } from '@angular/core';

import { Address } from 'angular-google-place';

@Injectable()
export class GeolocationService {

  public getAddressFragments(address: Address) {
    const formattedAddress: FormattedAddress = {
      latitude: 0,
      longtitude: 0
    };

    const componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name'
    };

    for (let i = 0; i < address.address_components.length; i++) {
      const addressType = address.address_components[i].types[0];

      if (componentForm[addressType]) {
        formattedAddress[addressType] = address.address_components[i][componentForm[addressType]];
      }
    }

    formattedAddress.latitude = address.geometry.location.lat();
    formattedAddress.longtitude = address.geometry.location.lng();

    return formattedAddress;
  }

  isForomattedAddressValid(address: FormattedAddress): Boolean {
    if (Object.keys(address).length !== 5) { return false; }

    if (address.latitude === null  || address.longtitude === null) { return false; }

    return true;
  }
}
