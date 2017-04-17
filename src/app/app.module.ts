import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DataTableModule, ButtonModule, SelectButtonModule, SharedModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { ReportsRoutingModule } from './home/home-routing.module';

import { ConvertDatePipe } from './shared/convert-date.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ReturnedUnitsComponent } from './returned-units/returned-units.component';

import { ReturnedUnitsService } from './returned-units/returned-units.service';

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
    FormsModule,
    DataTableModule,
    HttpModule,
    SharedModule,
    ButtonModule,
    SelectButtonModule,
    AppRoutingModule,
    ReportsRoutingModule
  ],
  providers: [
    ReturnedUnitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
