import { cineDTO } from './../modelo/cine'
import { Component, OnInit } from '@angular/core'
import { cineCreacionDTO } from '../modelo/cine'

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {

  modeloCine: cineDTO = { nombreCine: 'Sambil' }

  constructor() {}

  ngOnInit(): void {}
  //Guardamos la edicion del cine
  guardarCambiosEdicionCine(cine: cineCreacionDTO) {
    console.log(cine)
  }
}
