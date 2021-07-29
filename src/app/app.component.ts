import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorLow = '#d40f0f';
  colorMid = '#1fd40f';
  colorHigh = '#bdbdbd';
  percentage = 75;
}
