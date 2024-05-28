// calc-key.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc-key',
  standalone: true,
  template: `
    <button class="calcBtn" (click)="handleClick()">{{ keyValue }}</button>
  `,
  styles: ``
})
export class CalcKeyComponent {
  @Input() keyValue: string | number = '';
  @Output() keyClick: EventEmitter<string | number> = new EventEmitter();

  handleClick() {
    this.keyClick.emit(this.keyValue);
  }
}