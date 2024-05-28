import { Component } from '@angular/core';
import { CalcOpType } from '../../@types/globalTypes';
import { RouterOutlet } from '@angular/router';
import { CalcKeyComponent } from '../calc-key/calc-key.component';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [RouterOutlet, CalcKeyComponent],
  templateUrl: './calc.component.html',
  styles: ``
})
export class CalcComponent {
  prevValue: string | null = null;
  nextValue: string = "0";
  op: string | null = null;

  CalculatorOperations: CalcOpType = {
    "/": (a: number, b: number) => a / b,
    "*": (a: number, b: number) => a * b,
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "=": (_: number, b: number) => b,
  };

  performOperation() {
    if (this.op) {
      console.log(this.op)
      let temp = this.CalculatorOperations[this.op](
        parseFloat(this.prevValue!),
        parseFloat(this.nextValue)
      );
      console.log("temp", temp)
      this.op = null;
      this.nextValue = String(temp);
      this.prevValue = null;
    }
  }

  handleNum(number: number) {
    this.nextValue = this.nextValue === "0" ? String(number) : this.nextValue + number;
  }

  insertDot() {
    if (!/\./.test(this.nextValue)) {
      this.nextValue += ".";
    }
  }

  percentage() {
    this.nextValue = (parseFloat(this.nextValue) / 100).toString();
    if (this.prevValue && this.nextValue === "") {
      this.prevValue = (parseFloat(this.prevValue) / 100).toString();
    }
  }

  changeSign() {
    this.nextValue = (parseFloat(this.nextValue) * -1).toString();
  }

  clearData() {
    this.nextValue = "0";
    this.op = null;
    this.prevValue = null;
  }

  handleOperation(value: string | number) {
    if (typeof value === "number") {
      this.handleNum(value);
    } else if (value in this.CalculatorOperations) {
      if (this.op === null && value !== "=") {
        this.op = value;
        this.prevValue = this.nextValue;
        this.nextValue = "";
      }
      if (this.op && value !== "=") {
        this.op = value;
      }
      if (this.prevValue && this.op && this.nextValue) {
        this.performOperation();
      }
    } else if (value === "c") {
      this.clearData();
    } else if (value === "±") {
      this.changeSign();
    } else if (value === ".") {
      this.insertDot();
    } else if (value === "%") {
      this.percentage();
    }
  }
}
