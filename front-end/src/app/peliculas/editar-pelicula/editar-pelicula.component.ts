import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../modelo/pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  //inicializamos un modelo de pelicula
  modeloPelicula: PeliculaDTO = {
    titulo: '300', enCines: true, trailer: 'abc', resumen: 'cosa',
    fechaLanzamiento: new Date(), poster:'https://as01.epimg.net/deporteyvida/imagenes/2017/12/23/portada/1514026754_083885_1514026968_noticia_normal.jpg'  }
  constructor() { }

  ngOnInit(): void {
  }

}
