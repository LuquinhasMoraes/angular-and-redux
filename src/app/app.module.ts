import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, counterReducer } from './home/home.component';
import { StoreFeatureModule, Store, StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
