import { Apartment } from './models/result.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public results: Apartment[] = [];
  public top: Apartment[] = [];


  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activetedRoute.data.subscribe(({ apiResponse }) => {
      this.results = apiResponse.result;
      this.top = apiResponse.top;
    });
  }
}
