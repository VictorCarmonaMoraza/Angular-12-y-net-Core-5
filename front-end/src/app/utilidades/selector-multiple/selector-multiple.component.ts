import { MultipleselectorModel } from './modelo/MultipleSelectorModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  @Input() Seleccionados: MultipleselectorModel[] = [];
  @Input() NoSeleccionados: MultipleselectorModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(item: MultipleselectorModel, index:number): void {
    //Añadimos el item seleccionado al arreglo de seleccionados
    this.Seleccionados.push(item);
    //Borramos el elemento ubicaod el ese indice, el uno significa que solo borra uno
    this.NoSeleccionados.splice(index, 1);
  }

  deseleccionar(item: MultipleselectorModel, index: number): void {
    //Añadimos a la lista de no seleccionados
    this.NoSeleccionados.push(item);
    //Borramos el elemento ubicaod el ese indice, el uno significa que solo borra uno
    this.Seleccionados.splice(index, 1);

  }
  seleccionarTodo() {
//Pasamos todos los elementos de no seleccionados a seleccionados
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados = [];
  }
  deseleccionarTodo() {
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
  }
}
