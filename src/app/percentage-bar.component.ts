import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'battery-percentage',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.css'],
})
export class BatteryPercentageComponent {
  @Input() public colorLow: string;
  @Input() public colorMid: string;
  @Input() public colorHigh: string;
  @Input() public percentage: number;
  arrayColor = [];
  totalPin = 100;
  pinColor = '#efefed';

  constructor() {}

  ngOnInit() {
    this.renderArrayColor();
    console.log(this.arrayColor);
  }

  renderArrayColor() {
    const part = 100 / this.totalPin;
    let currentLevel = 0 + part;
    for (let i = 0; i < this.totalPin; i++) {
      if (this.percentage >= currentLevel) {
        if(this.percentage <= 20){
          this.arrayColor.push({ full: true, color: this.colorLow, width: '7px' });
        }else if(this.percentage >= 21 && this.percentage <=99) {
          this.arrayColor.push({ full: true, color: this.colorMid, width: '7px' });
        }else if(this.percentage == 100){
          this.arrayColor.push({ full: true, color: this.colorHigh, width: '7px' });
        }
        
        currentLevel += part;
      } else {
        const newWidth = ((this.percentage - currentLevel + part) * 7) / 20;
        this.arrayColor.push({
          full: false,
          color: this.pinColor,
          width: newWidth + 'px'
        });
        for (let j = i + 1; j < this.totalPin; j++) {
          this.arrayColor.push({
            full: true,
            color: this.pinColor,
            width: '7px'
          });
        }
        break;
      }
    }
    console.log(this.arrayColor);
  }
}
