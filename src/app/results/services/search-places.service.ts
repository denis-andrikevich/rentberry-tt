import { Apartment, ResultResponse } from './../models/result.model';
import { ApiResponse } from './../../core/models/api-response.model';
import { Injectable, Optional, Inject } from '@angular/core';
import { FormattedAddress } from '../../core/models/places';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class SearchPlacesService {
  constructor(private http: HttpClient,
    @Optional() @Inject('REQUEST') private REQUEST: any,
    @Inject('ORIGIN_URL') private originUrl: string) {
  }

  getRents(address?: FormattedAddress): Observable<ResultResponse> {
    const headers = new HttpHeaders();
    let params = new HttpParams();

    if (address) {
      Object.keys(address).forEach((key) => {
        params = params.set(key, address[key]);
      });
    }

    if (this.REQUEST) {
      headers.set('x-forwarded-for', this.REQUEST.connection.remoteAddress);
    }
    /**
     * Due to task requirements here must be POST req
     * But Universal can not cache these types of request, so i decided to pass query params with GET
     */
    return this.http.get<ApiResponse<ResultResponse>>(`${this.originUrl}/api/rents`, { headers, params })
      .pipe(
        map(apiResponse => apiResponse.body)
      );
  }
}
