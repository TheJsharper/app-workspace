
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContactModule } from "contact-lib";
import { AppGameModule } from "game-lib";
import { HeaderLibModule } from 'header-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 


//import {NgrxComparisonModule} from 'ngrx-comparison-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderLibModule,
   AppContactModule,
   AppGameModule,
   //NgrxComparisonModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
