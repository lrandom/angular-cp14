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
  result: number;

  constructor() { }

  ngOnInit() {
  }

  getOperator(op) {
    this.operatorSymbol = op;
  }

  calc() {
    switch (this.operatorSymbol) {
      case '+':
        this.result = parseFloat(this.num1) + parseFloat(this.num2);
        break;

      case '-':
        this.result = parseFloat(this.num1) - parseFloat(this.num2);
        break;

      case '*':
        this.result = parseFloat(this.num1) * parseFloat(this.num2);
        break;

      case '/':
        this.result = parseFloat(this.num1) / parseFloat(this.num2);
        break;
    }
  }

}
