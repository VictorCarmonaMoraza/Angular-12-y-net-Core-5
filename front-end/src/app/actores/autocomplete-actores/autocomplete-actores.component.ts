import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css'],
})
export class AutocompleteActoresComponent implements OnInit {
  actores = [
    {
      nombre: 'Ton Holland',
      foto:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tom_Holland_MTV_2018_%2801%29.jpg/200px-Tom_Holland_MTV_2018_%2801%29.jpg',
    },
    {
      nombre: 'Ton Hanks',
      foto: 'https://www.fotonostra.com/albums/celebres/fotos/tomhanks.jpg',
    },
    {
      nombre: 'Samuel L . Jackson',
      foto:
        'https://elfarandi.com/wp-content/uploads/2021/06/Samuel-L.-Jackson.jpg',
    },
  ]

  control: FormControl = new FormControl()
  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  constructor() {}

  ngOnInit(): void {
    //Creamos un observable para cuando cambie el control
    this.control.valueChanges.subscribe((valor) => {
      this.actores = this.actoresOriginal;
       this.actores= this.actores.filter(actor=>actor.nombre.indexOf(valor) !==-1)
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
  }
}
