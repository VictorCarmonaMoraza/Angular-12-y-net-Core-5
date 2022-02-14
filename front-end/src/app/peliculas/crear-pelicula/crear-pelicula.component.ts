import { PeliculaCreacionDTO } from './../modelo/pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarPelicula(pelicula: PeliculaCreacionDTO) {
    console.table(pelicula);
  }

}
