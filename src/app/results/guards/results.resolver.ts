import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SearchPlacesService } from '../services/search-places.service';
import { FormattedAddress } from '../../core/models/places';

@Injectable()
export class ResultsResolver implements Resolve<any> {
  constructor(private router: Router, private searchPlacesService: SearchPlacesService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.searchPlacesService.getRents(route.queryParams);
  }
}
