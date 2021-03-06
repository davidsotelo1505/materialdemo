import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
   
  }
  private _tickInterval = 1;
  color = 'accent';

  constructor() { }

  ngOnInit() {
  }

}
