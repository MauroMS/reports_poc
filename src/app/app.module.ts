import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule, ButtonModule, SelectButtonModule, SharedModule, CalendarModule, DropdownModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { ReportsRoutingModule } from './home/home-routing.module';

import { ConvertDatePipe } from './shared/convert-date.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReturnedUnitsComponent } from './returned-units/returned-units.component';

import { ReturnedUnitsService } from './returned-units/returned-units.service';
import { SitesService } from './sites/sites.service';


@NgModule({
  declarations: [
    AppComponent,
    ConvertDatePipe,
    HeaderComponent,
    HomeComponent,
    ReturnedUnitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    SharedModule,
    ButtonModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    AppRoutingModule,
    ReportsRoutingModule
  ],
  providers: [
    ReturnedUnitsService,
    SitesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
