import { Apartment } from './../../models/result.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent {
  @Input() apartment: Apartment;
}
