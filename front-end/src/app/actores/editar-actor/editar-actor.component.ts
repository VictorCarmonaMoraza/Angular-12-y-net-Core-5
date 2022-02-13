import { actorCreacionDTO } from './../modelo/actor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  modelo: actorCreacionDTO = {nombre:'Victor',fechaNacimiento:new Date()}

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
