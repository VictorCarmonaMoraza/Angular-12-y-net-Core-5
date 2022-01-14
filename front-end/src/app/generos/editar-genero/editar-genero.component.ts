import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../Interface-Genero/IGenero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modeloEdicion: generoCreacionDTO={nombre:'Drama'}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GuardarGenero(genero: generoCreacionDTO) {
    //Guardar los cambios
    console.log(genero);
    //Navegamos hacia la pagian principal de generos
    this.router.navigate(['/generos']);
  }
}
