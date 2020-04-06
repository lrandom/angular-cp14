import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {
  pins: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  inputPin: string = '';
  account: any = '5000000';
  db: Array<string> = ['128784334', '23232323', '287283728'];
  isLog = false;
  constructor() {

  }

  ngOnInit() {
  }

  enterPin(input) {
    this.inputPin += input;
  }

  enter() {
    if (this.db.indexOf(this.inputPin) >= 0) {
      alert("Thành công");
      this.isLog = true;
    } else {
      alert("Thất bại");
      this.isLog = false;
    }
  }

  widthraw(number) {
    this.account -= number;
    alert('Số tiền còn lại là' + this.account);
  }

}
