import { ResultResponse } from './../models/result.model';
import { Observable } from 'rxjs/Observable';
import { ApiResponse } from './../../core/models/api-response.model';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SearchPlacesService } from '../services/search-places.service';
import { FormattedAddress } from '../../core/models/places';

@Injectable()
export class ResultsResolver implements Resolve<Observable<ResultResponse>> {
  constructor(private searchPlacesService: SearchPlacesService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.searchPlacesService.getRents(route.queryParams);
  }
}
