import { generoDTO } from './Interface-Genero/IGenero';
import { Injectable } from '@angular/core';

@Injectable({
  //Este servicio es un singleton lo que significa que siempre se va a servir la misma instancia en nuestra app
  providedIn: 'root'
})
export class GenerosService {

  constructor() { }

  public obtenerTodos(): generoDTO[]
  {
    return [{ id: 1, nombre: 'Drama' }];
  }
}
