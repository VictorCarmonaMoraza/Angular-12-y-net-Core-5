import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  //Decorador para recibir parametros
  @Input() peliculas;

  constructor() { }

  ngOnInit(): void {

  }

}
