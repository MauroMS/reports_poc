import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Site } from './../domain/site';
import { SelectItem } from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SitesService {

  constructor(private http: Http) {}

  getSites() {
    return this.http.get('src/assets/resources/sites.json')
      .toPromise()
      .then(res => <Site[]> res.json().data)
      .then(data => {
        return data;
      });
  }

  getSitesDropdown(): Promise<SelectItem[]> {
    return this.getSites().then( sites => {
        const ddpSites: SelectItem[] = [];
        sites.forEach( site => {
            ddpSites.push({ label: site.siteName, value: site.siteId });
        });
        return ddpSites;
    });
  }
}
