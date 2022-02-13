import { actorCreacionDTO } from './../modelo/actor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  @Input() modeloHijo: actorCreacionDTO
  @Output() submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();
  formActores: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  //Cuando iniciemos
  ngOnInit(): void {
    this.formActores = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: ''
    });

    if (this.modeloHijo !== undefined) {
      this.formActores.patchValue(this.modeloHijo);
    }
  }

  onSubmit() {
    //Emitimos los valores del formualrio
    this.submit.emit(this.formActores.value);
  }

}
