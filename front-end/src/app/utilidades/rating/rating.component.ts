import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maximoEstrellas = 5;
  @Input() estrellaSeleccionada = 0;
  maximoArregloEstrellas = [];
  votacionUsuario = false;
  estrellaAnterior;

  constructor() { }

  ngOnInit(): void {
    //Instanciamos el arreglo de estrellas y lo rellenamos de ceros
    this.maximoArregloEstrellas = Array(this.maximoEstrellas).fill(0);
  }

  //Para cuando pasemos el raton por encima de las estrellas
  manejarMouseEnter(indice: number): void {
    debugger;
    this.estrellaSeleccionada = indice + 1;
  }

  //Para cuando abandonemos las estrellas
  manejarMouseLeave() {
    debugger;
    //si el usuario no ha votado
    if (this.estrellaAnterior !=0) {
      this.estrellaSeleccionada = this.estrellaAnterior;
    } else {
      this.estrellaSeleccionada = 0;
    }

  }

  //Marcador de la ultima estrella seleccionada
  marcarEstrellaSeleccionada(indice: number): void{
    debugger;
    this.estrellaSeleccionada = indice + 1;
    this.votacionUsuario = true;
    this.estrellaAnterior = this.estrellaSeleccionada;
  }

}
