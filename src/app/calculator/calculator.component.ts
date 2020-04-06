import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  operatorSymbol: string;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  getOperator(op) {
    this.operatorSymbol = op;
  }

  calc() {
    switch (this.operatorSymbol) {
      case '+':
        this.result = this.num1 + this.num2;
        break;

      case '-':
        this.result = this.num1 - this.num2;
        break;

      case '*':
        this.result = this.num1 * this.num2;
        break;

      case '/':
        this.result = this.num1 / this.num2;
        break;
    }
  }

}
