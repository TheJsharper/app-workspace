import { metaReducers } from './store/app.reducers';
import {StoreModule} from'@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContactModule } from "contact-lib";
import { AppGameModule } from "game-lib";
import { HeaderLibModule } from 'header-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodosModule, reducers} from 'todos-lib';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 


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
   TodosModule,
   StoreModule.forRoot(reducers,{ metaReducers}, ),
   !environment.production ? StoreDevtoolsModule.instrument() : [],
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
