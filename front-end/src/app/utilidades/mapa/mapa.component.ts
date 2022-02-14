import { Coordenada } from './modeloCoordenada/coordenada';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker,icon } from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input() coordenadaasIniciales: Coordenada[] = [];
  //Paraq poder hacer marcaciones en nuesttro mapa
  capas: Marker<any>[] = [];

  //Queremos emitir las coordenadas ara que se queden en el FormGroup
  @Output() coordenadaSeleccionadaActual: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  constructor() { }

  ngOnInit(): void {
    this.capas = this.coordenadaasIniciales.map(valor =>
      marker([valor.latitud, valor.longitud])
    );
  }
//Configuraciones iniciales de nuestro mapa
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(37.38699733603703, -365.9936428070069)
  };

  senalarPuntoEnMapa(event: LeafletMouseEvent) {
    //Obtenemos la latitud cuando marcamos
    const latitudObtenida = event.latlng.lat;
    //Obtenemos la longitud cuando marcamos
    const longitudObtenida = event.latlng.lng;
    //Mostrar dos datos en un console log
    console.log({ latitudObtenida, longitudObtenida })
    //Para solo poder marcar una vez en pantalla
    this.capas = [];
    //Añadimos la marcacion a nuestro arreglo
    this.capas.push(marker([latitudObtenida, longitudObtenida], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl:'assets/marker-shadow.png'
      })
    }));
    this.coordenadaSeleccionadaActual.emit({ latitud: latitudObtenida, longitud: longitudObtenida});
  }
}
