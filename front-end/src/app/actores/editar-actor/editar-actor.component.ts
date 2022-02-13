import { actorCreacionDTO, actorDTO } from './../modelo/actor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  modelo: actorDTO = { nombre: 'Victor', fechaNacimiento: new Date(), foto:'https://www.ecartelera.com/images/sets/24100/24148.jpg'}

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro => {
      //alert(parametro.id);
    })
  }

  guardarCambiosEditar(actor: actorCreacionDTO) {
    console.table(actor);
  }

}
