import { generoDTO } from './../Interface-Genero/IGenero';
import { GenerosService } from './../generos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {




  constructor(private generoService: GenerosService) { }

  generos: generoDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];

  ngOnInit(): void {
    this.generoService.obtenerTodos()
      .subscribe(generos => {
        this.generos = generos;
    },error=>console.error(error));
  }

}
