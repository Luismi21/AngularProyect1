import { Component } from '@angular/core';

@Component({
  selector: 'app-herore',
  templateUrl: 'heroe.component.html',
})
export class heroeComponent {
  nombre: string = 'ironman';
  edad: number = 45;

  get nombrecapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNom(): string {
    return `${this.nombre}-${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'spiderman';
  }
  cambiarEdad() {
    this.edad = 20;
  }
}
