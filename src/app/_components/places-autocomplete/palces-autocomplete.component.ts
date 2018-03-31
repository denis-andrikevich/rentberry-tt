import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Address } from 'angular-google-place';

import { GeolocationService } from './../../core/utils/geolocation';

import { FormattedAddress } from '../../core/models/places';
import { SEARCH_OPTIONS } from './constants';

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
  onSearchSubmit = new EventEmitter<FormattedAddress>();
  @Input()
  searchTittle: String;
  @ViewChild('searchForm') searchForm: NgForm;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.searchOptions = SEARCH_OPTIONS;
  }

  public onAdressChanged(address: Address) {
    this.formattedAddress = this.geolocationService.getAddressFragments(address);
  }

  public onSubmit() {
    if (!this.geolocationService.isForomattedAddressValid(this.formattedAddress)) {
      this.searchForm.form.controls['address'].setErrors({
        invalid: true
      });

      return false;
    }

    this.searchForm.reset();
    this.onSearchSubmit.emit(this.formattedAddress);
  }
}
