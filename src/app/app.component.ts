import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngCP14';
  name: string = 'Hi CP 14';
  nameClass: string = 'test';
  isShow: boolean = true;
  number: number = 4;
  path: string = 'https://lh3.googleusercontent.com/proxy/cDxT5T05u0IO0AHsS-YJ1kmAxBh7ypXNT98-uWNknxJiXMqMj_hn1_lj7dqoqbzrXmHfLIsy0hD7uYwbxiB51kN5rnRP3scvAtvQm5hctAdnFeAUuLiy1Ni7QJy9SIHWWdtZ5LLYEOnMXUKZc27bEJNG08iSN1lWcDry1T1b1DBYnx5TgOsObtzsMARKXOszcP9Z3rjZp-Qs-yTLW4s69QM';
  mang: Array<any> = [
    { name: "Luan", age: 28 },
    { name: "Nam", age: 29 },
  ]
  update() {
    alert("Du lieu nhap tu input la" + this.name);
  }
}
