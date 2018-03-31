import { Component, OnInit, EventEmitter } from '@angular/core';

import { Address } from 'angular-google-place';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public getAddress(address: Address) {
    console.log(address);
  }
}
