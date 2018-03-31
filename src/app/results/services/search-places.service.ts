import { Injectable } from '@angular/core';
import { FormattedAddress } from '../../core/models/places';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchPlacesService {
  constructor(private http: HttpClient) {}

  getRents(address: FormattedAddress): Observable<any> {
    return this.http.post('/api/rents', address);
  }
}
