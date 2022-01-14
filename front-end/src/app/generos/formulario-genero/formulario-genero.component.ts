import { generoCreacionDTO } from './../Interface-Genero/IGenero';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLatraMayuscula';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  @Output() FormularioEnvio: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();
  @Input() modeloRecibidoParaEditar: generoCreacionDTO;
  formGenero: FormGroup;

  constructor(

    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGenero = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });

    if (this.modeloRecibidoParaEditar !== undefined) {
      this.formGenero.patchValue(this.modeloRecibidoParaEditar);
    }
  }


  guardarCambiosFormGenero() {
    //Enviamos hacia el componente padre, para ello tenemos que utilizar output
    this.FormularioEnvio.emit(this.formGenero.value);

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
