import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BatteryPercentageComponent } from './percentage-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BatteryPercentageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
