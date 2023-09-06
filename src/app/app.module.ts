import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { TerritoryListComponent } from './components/territory-list/territory-list.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import {HttpClientModule} from '@angular/common/http';
import { TerritoryComponent } from './components/territory/territory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardPopupComponent } from './components/card-popup/card-popup.component';
import { ViewPopupComponent } from './components/view-popup/view-popup.component';
import { CompleteComponent } from './components/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentBoxComponent,
    TerritoryListComponent,
    TopNavComponent,
    TerritoryComponent,
    CardPopupComponent,
    ViewPopupComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
