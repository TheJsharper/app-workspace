
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderLibModule} from 'header-lib';
import {AppContactModule} from "contact-lib";
import {AppGameModule} from "game-lib";
//import {} from ''

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderLibModule,
   AppContactModule,
   AppGameModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
