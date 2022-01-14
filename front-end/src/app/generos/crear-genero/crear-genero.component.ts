import { generoCreacionDTO } from './../Interface-Genero/IGenero';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLatraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router: Router) { }

  GuardarGenero(genero:generoCreacionDTO) {
    //Guardar los cambios
    console.log(genero);
    //Navegamos hacia la pagian principal de generos
    this.router.navigate(['/generos']);
  }
}
