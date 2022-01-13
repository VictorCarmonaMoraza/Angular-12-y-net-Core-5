import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLatraMayuscula';

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
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });
  }

  GuardarGenero() {
    //Guardar los cambios
    //Navegamos hacia la pagian principal de generos
    this.router.navigate(['/generos']);
  }
  guardarCambios() {

  }

  //Obtengo el error del campo
  obtenerErrorCampoNombre() {
    var campo = this.formGenero.get('nombre');
    //Si el campo nombre tiene el error required lanzamos el error para otros casos ningun mensaje
    if (campo.hasError('required')) {
      return 'El campo nombre es requerio';
    }
    /*los nombres de las validaciones deben ir en minuscula porque sino no saltan los errores como
     pasa con el nombre 'minlength'*/
    if (campo.hasError('minlength')) {
      return 'La longitud mínima es de 3 caracteres';
    }

    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
