import { GenerosService } from './../generos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generoService:GenerosService) { }

  ngOnInit(): void {
    const generos = this.generoService.obtenerTodos();
    console.log(generos);
  }

}
