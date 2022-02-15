import { actorCreacionDTO, actorDTO } from './../modelo/actor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  @Input() modeloHijo: actorDTO
  @Output() Onsubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();
  formActores: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  //Cuando iniciemos
  ngOnInit(): void {
    this.formActores = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: '',
      foto: '',
      biografia:''
    });

    if (this.modeloHijo !== undefined) {
      this.formActores.patchValue(this.modeloHijo);
    }
  }

  onSubmit() {
    //Emitimos los valores del formualrio
    this.Onsubmit.emit(this.formActores.value);
  }

  //Agregamos la imagen
  agregarImagen(imgArchivo: File) {
    //Obtenemos la foto del formulario
    let foto = this.formActores.get('foto')
    //Setetamos el valor
    foto.setValue(imgArchivo);
     console.log(foto.value.name)
  }

  //Obtenemos el texto enriquecido y lo modificamos en el modelo
  CambiotextEnriquecido(texto: string) {
    //Obtenemos el valor del elemento
    let textoEnriquecido = this.formActores.get('biografia');
    //Seteamos el valor del elemento
    textoEnriquecido.setValue(texto);
  }

}
