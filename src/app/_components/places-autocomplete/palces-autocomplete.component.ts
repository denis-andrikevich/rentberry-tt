import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { Address } from 'angular-google-place';

@Component({
  selector: 'app-palces-autocomplete',
  templateUrl: './palces-autocomplete.component.html',
  styleUrls: ['./palces-autocomplete.component.scss']
})
export class PalcesAutocompleteComponent implements OnInit {
  public searchOptions: any;
  public address: Address;

  @Output() getAddress: EventEmitter<Address> = new EventEmitter<Address>();

  constructor() { }

  ngOnInit() {
    this.searchOptions = {
      type: 'address',
      componentRestrictions: {
        country: 'US'
      }
    };
  }

  onAdressChange(address: Address) {
    this.getAddress.emit(address);
  }
}
