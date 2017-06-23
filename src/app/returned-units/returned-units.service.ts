import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReturnedUnit } from './../domain/returned-unit';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReturnedUnitsService {

  constructor(private http: Http) { }

  getHNUnitsReturned() {
        return this.http.get('assets/resources/units-returned-hn.json')
                    .toPromise()
                    .then(res => <ReturnedUnit[]> res.json().data)
                    .then(data => { return data; });
  }

  getMPUnitsReturned() {
        return this.http.get('assets/resources/units-returned-mp.json')
                    .toPromise()
                    .then(res => <ReturnedUnit[]> res.json().data)
                    .then(data => { return data; });
  }
}
