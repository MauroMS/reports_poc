import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ReturnedUnitsComponent } from './../returned-units/returned-units.component';

const routes: Routes = [
    { 
        path: 'reports',  
        children: [      
            { 
                path: 'returnedunits', 
                component: ReturnedUnitsComponent
            }
        ]
    },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ReportsRoutingModule {}