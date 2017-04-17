import { Component, OnInit } from '@angular/core';
import { ReturnedUnit } from './../domain/returned-unit';
import { ReturnedUnitsService } from './returned-units.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-returned-units',
  templateUrl: './returned-units.component.html',
  styleUrls: ['./returned-units.component.scss']
})
export class ReturnedUnitsComponent implements OnInit {

  constructor(private returnedUnitsService:ReturnedUnitsService) { }

  returnedUnits: ReturnedUnit[];
  
  types: SelectItem[];
  selectedType: string = "1";

  ngOnInit() {
    this.changeSelectedType();
    this.types = [];
    this.types.push({label: 'Harvey Nicols', value: '1'});
    this.types.push({label: 'Marketplace', value: '2'});
  }

  changeSelectedType(){
    if(this.selectedType === '1'){
      console.log("HN Units");
      this.getHNUnits();  
    }
    else{
      console.log("MP Units");
      this.getMPUnit();
    }
  }

  getHNUnits(){
    this.returnedUnitsService.getHNUnitsReturned().then(units => this.returnedUnits = units);
  }

  getMPUnit(){
    this.returnedUnitsService.getMPUnitsReturned().then(units => this.returnedUnits = units);
  }
}
