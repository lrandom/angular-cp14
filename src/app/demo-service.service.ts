import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  constructor() {

  }

  alertHi() {
    alert('Xin chào các bạn');
  }

}
