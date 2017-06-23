import { Component, OnInit } from '@angular/core';
import { ReturnedUnit } from './../domain/returned-unit';
import { ReturnedUnitsService } from './returned-units.service';
import { SitesService } from './../sites/sites.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-returned-units',
  templateUrl: './returned-units.component.html',
  styleUrls: ['./returned-units.component.scss']
})
export class ReturnedUnitsComponent implements OnInit {

  returnedUnits: ReturnedUnit[];
  types: SelectItem[];
  selectedType: string;
  sites: SelectItem[];
  selectedSite: string;
  dateFrom: Date;
  dateTo: Date;

  constructor(private returnedUnitsService: ReturnedUnitsService, private sitesService: SitesService) { }

  ngOnInit() {
    this.types = [];
    this.selectedSite = '1';
    this.selectedType = '1';
    this.types.push({label: 'Store', value: '1'});
    this.types.push({label: 'Marketplace', value: '2'});
    this.changeSelectedType();
    this.sitesService.getSitesDropdown().then(ddpSites => this.sites = ddpSites);
  }

  changeSelectedType() {
    if (this.selectedType === '1') {
      console.log('HN Units');
      this.getHNUnits();
    }else {
      console.log('MP Units');
      this.getMPUnit();
    }
  }

  getHNUnits() {
    this.returnedUnitsService.getHNUnitsReturned().then(units => this.returnedUnits = units);
  }

  getMPUnit() {
    this.returnedUnitsService.getMPUnitsReturned().then(units => this.returnedUnits = units);
  }

  print() {
    alert('Chuser!');
  }
}
