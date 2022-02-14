import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  //Paraq poder hacer marcaciones en nuesttro mapa
  capas: Marker<any>[] = [];

  constructor() { }

  ngOnInit(): void {
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
    debugger;
    //Obtenemos la latitud cuando marcamos
    const latitud = event.latlng.lat;
    //Obtenemos la longitud cuando marcamos
    const longitud = event.latlng.lng;
    //Mostrar dos datos en un console log
    console.log({ latitud, longitud })
    //Para solo poder marcar una vez en pantalla
    this.capas = [];
    //Añadimos la marcacion a nuestro arreglo
    this.capas.push(marker([latitud, longitud]));
  }
}
