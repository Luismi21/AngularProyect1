import { Component } from '@angular/core';

@Component({
  selector: 'app-Contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>la Base es:</h3>
    <strong> {{ numero }} </strong> <br /><br />

    <button (click)="acumular(+base)">+ {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'Contador app';

  numero: number = 0;
  base: number = 5;

  acumular(val: number) {
    this.numero += val;
  }
}
