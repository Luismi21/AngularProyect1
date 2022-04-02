import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['ironman', 'hoku', 'hulk', 'spiderman'];
  heroeB: string = '';

  borrarHeroe() {
    //el shift sirve para borrar el primero de la lista
    this.heroeB = this.heroes.shift() || '';
  }
}
