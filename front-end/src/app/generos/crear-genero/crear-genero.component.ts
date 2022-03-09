import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { GenerosService } from './../generos.service';
import { generoCreacionDTO } from './../Interface-Genero/IGenero';
import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  //Este arreglo de errores sera el que mandemos para el formulario de genero
  errores: string[] = [];

  constructor(
    private router: Router,
    private generosService: GenerosService
  ) { }

  //Llamada al servicio para generar un genero
  GuardarGenero(genero: generoCreacionDTO) {
    this.generosService.crear(genero).subscribe(() => {
      //Navegamos hacia la pagian principal de generos
      this.router.navigate(['/generos']);
    }, error => this.errores=parsearErroresAPI(error));
  }

}

