import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  formGenero: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGenero = this.formBuilder.group({
      nombre : ''
    });
  }

  GuardarGenero() {
    //Guardar los cambios
    //Navegamos hacia la pagian principal de generos
    this.router.navigate(['/generos']);
  }
  guardarCambios(){

  }
}
