import { cineCreacionDTO } from './../modelo/cine';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {


  formCines: FormGroup;
  @Input() modelo: cineCreacionDTO;

  @Output() cineEnviado: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formCines = this.formBuilder.group({
      //Campo nombre
      nombreCine: ['', { validators: [Validators.required] }],
    });
    if (this.modelo !== undefined) {
      this.formCines.patchValue(this.modelo);
    }
  }

  onSubmit() {
    //Emitimos los valores del formualrio
    this.cineEnviado.emit(this.formCines.value);
  }

}
