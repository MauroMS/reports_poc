import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnedUnitsComponent } from './returned-units.component';

const routes: Routes = [
  { path: '', component: ReturnedUnitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ReturnedUnitsRoutingModule {}
