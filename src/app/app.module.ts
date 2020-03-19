import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatCheckboxModule,
} from '@angular/material';

import { MatBadgeModule } from '@angular/material/badge';


const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatGridListModule,
  MatCheckboxModule,
  MatBadgeModule
]

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
