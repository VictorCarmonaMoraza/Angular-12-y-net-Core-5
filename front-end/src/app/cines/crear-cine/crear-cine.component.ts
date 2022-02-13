import { cineCreacionDTO } from './../modelo/cine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambiosCine(cine:cineCreacionDTO) {
    console.log(cine);
  }

}
