import { HttpClient } from '@angular/common/http';
import { generoDTO } from './Interface-Genero/IGenero';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  //Este servicio es un singleton lo que significa que siempre se va a servir la misma instancia en nuestra app
  providedIn: 'root'
})
export class GenerosService {

  constructor( private http:HttpClient) { }

  private apiURL = environment.apiUrl;

  public obtenerTodos():Observable<generoDTO[]>
  {
    return this.http.get<generoDTO[]>(this.apiURL)
  }
}
