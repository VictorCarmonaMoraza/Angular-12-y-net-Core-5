import { PeliculaCreacionDTO, PeliculaDTO } from './../modelo/pelicula';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  formPeliculas: FormGroup;

  //modelo recibido de editar
  @Input() modeloRecibdio: PeliculaDTO;

  //Modelo a emiit
  @Output() modeloPeliculaEmitir: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //Inicializamos el formGroup
    this.formPeliculas = this.formBuilder.group({
      titulo: ['', { validators: [Validators.required] }],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    });
    if (this.modeloRecibdio !== undefined) {
      this.formPeliculas.patchValue(this.modeloRecibdio);
    }
  }

  guardarCambiosPelicula() {
    this.modeloPeliculaEmitir.emit(this.formPeliculas.value);
  }

  archivoSeleccionado(archivo: File) {
    this.formPeliculas.get('poster').setValue(archivo);
  }

  changeMarkDown(texto) {
    this.formPeliculas.get('resumen').setValue(texto);
  }

}
