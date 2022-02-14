import { Coordenada } from './../../utilidades/mapa/modeloCoordenada/coordenada';
import { cineCreacionDTO } from './../modelo/cine';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  lat: number;
  log: number;
  formCines: FormGroup;
  @Input() modelo: cineCreacionDTO;

  @Output() cineEnviado: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial: Coordenada[] = [];

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formCines = this.formBuilder.group({
      //Campo nombre
      nombreCine: ['', { validators: [Validators.required] }],
      latitud: ['', { validators: [Validators.required] }],
      longitud: ['', { validators: [Validators.required] }],

    });
    if (this.modelo !== undefined) {
      this.formCines.patchValue(this.modelo);
      this.coordenadaInicial.push({ latitud: this.modelo.latitud, longitud: this.modelo.longitud });
    }
  }

  onSubmit() {
    //Emitimos los valores del formualrio
    this.cineEnviado.emit(this.formCines.value);
  }

  agregarCoordenada(coordenada: Coordenada): void{
    //Actualiza los campos del formulario
    this.formCines.patchValue(coordenada);
    this.lat = coordenada.latitud;
    this.log = coordenada.longitud;
    let coordenadaObtenida = coordenada;
  }

}
