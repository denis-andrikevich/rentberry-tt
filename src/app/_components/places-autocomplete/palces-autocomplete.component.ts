import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

import { Address } from 'angular-google-place';

import { GeolocationService } from './../../core/utils/geolocation';

import { FormattedAddress } from '../../core/models/places';

@Component({
  selector: 'app-palces-autocomplete',
  templateUrl: './palces-autocomplete.component.html',
  styleUrls: ['./palces-autocomplete.component.scss']
})
export class PalcesAutocompleteComponent implements OnInit {
  public searchOptions: any;
  public address: Address;
  public formattedAddress: FormattedAddress = {};
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onSearchSubmit: EventEmitter<FormattedAddress> = new EventEmitter<FormattedAddress>();
  @Input()
  searchTittle: String;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.searchOptions = {
      type: 'address',
      componentRestrictions: {
        country: 'US'
      }
    };
  }

  public onAdressChanged(address: Address) {
    console.log(this.geolocationService.getAddressFragments(address));
    this.formattedAddress = this.geolocationService.getAddressFragments(address);
  }

  public onSubmit() {
    if (Object.keys(this.formattedAddress).length !== 5) {
      return false;
    }

    return this.onSearchSubmit.emit(this.formattedAddress);
  }
}
