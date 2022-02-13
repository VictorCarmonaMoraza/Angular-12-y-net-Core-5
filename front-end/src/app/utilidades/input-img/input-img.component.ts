import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { toBase64 } from '../utilidades'

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  imagenBase64: string;

  @Input()  imagenRecibida:string=''
  @Output() archivoSleccionado: EventEmitter<File> = new EventEmitter<File>();

  constructor() {}

  ngOnInit(): void {}

  change(event) {
    //Comporbamos cuantos archivos tenemos seleccionados
    if (event.target.files.length > 0) {
      //Obtenemos el archivo seleccionado
      const file: File = event.target.files[0];
      //Convertimos el archivo a base64
      toBase64(file).then((value: string) => this.imagenBase64 = value)
        .catch(error => console.log(error));
      //Emitimos el archivo
      this.archivoSleccionado.emit(file);
      //Para que solo se permita una imagen
      this.imagenRecibida = null;
    }
  }
}
